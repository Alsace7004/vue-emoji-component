import { Mp3Encoder } from "lamejs";

export default class AudioRecorder {
  constructor(options) {
    this.onInitSuccessCallBack = options.onInitSuccessCallBack || null;
    this.onInitFailCallBack = options.onInitFailCallBack || null;
    this.onStartCallBack = options.onStartCallBack || null;
    this.onStopCallBack = options.onStopCallBack || null;
    this.onRecordingError = options.onRecordingError || null;
    // time slice of each chunk is 30 sec, default audio time limit is 10 mins, so default maxNumOfChunks is 20
    this.maxNumOfChunks = options.maxNumOfChunks || 20;
    this.duration = 0;
    this.recording = false;
    this.audioContext = null; //Audio context
    this.audioSrc = null; //Audio source
    this.audioProcessorNode = null; //The audio processor node
    this.mp3Encoder = null; //The MP3 encoder object
    this.mp3Buffers = []; //Collection of MP3 buffers
    this.mp3EncoderConfigs = {
      channel: 1, //1=mono, 2=stereo
      bufferSize: 4096, //input buffer size (bytes), 16bit signed int.
      sampleRate: 44100, //Input sample rate (samples per second)
      bitRate: 64 //Output bit rate (9-128)
    };

    //Browser compatibility
    // https://caniuse.com/?search=AudioContext
    window.AudioContext =
      window.AudioContext || window.webkitAudioContext || AudioContext;

    if (
      !navigator ||
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getUserMedia
    ) {
      if (this.onInitFailCallBack) {
        this.onInitFailCallBack({
          code: 1 //"Browser not support as getUserMedia is not implemented in this browser "
        });
      }
    } else if (!window.AudioContext) {
      if (this.onInitFailCallBack) {
        this.onInitFailCallBack({
          code: 1 //"Browser not support as AudioContext is not implemented in this browser "
        });
      }
    } else {
      const constraints = {
        audio: {
          channelCount: 1,
          sampleRate: 48000,
          sampleSize: 16,
          volume: 1
        }
      };

      this.audioContext = new window.AudioContext();
      navigator.mediaDevices
        .getUserMedia({ audio: constraints })
        .then(this.handleSuccess.bind(this), this.handleError.bind(this));
    }
  }
  handleSuccess(stream) {
    // check browser capabilities
    let track = stream.getAudioTracks()[0];
    //console.log(track.getCapabilities());

    // create audio stream source
    this.audioSrc = this.audioContext.createMediaStreamSource(stream);

    // create the mp3 encoder object.
    this.mp3Encoder = new Mp3Encoder(
      this.mp3EncoderConfigs.channel,
      this.mp3EncoderConfigs.sampleRate,
      this.mp3EncoderConfigs.bitRate
    );

    if (this.onInitSuccessCallBack) {
      this.onInitSuccessCallBack();
    }
  }
  handleError(error) {
    var errorCode;
    var errorName = error.name;
    if (
      errorName === "PermissionDeniedError" ||
      errorName === "NotAllowedError"
    ) {
      errorCode = 2;
    } else if (
      errorName === "NotFoundError" ||
      errorName === "DevicesNotFoundError"
    ) {
      errorCode = 3;
    } else if (errorName === "NotReadableError") {
      errorCode = 4;
    }

    if (this.onInitFailCallBack) {
      this.onInitFailCallBack({
        code: errorCode //"Permission denied or no microphone detected"
      });
    }
  }

  reset() {
    // reset
    this.recording = false;
    this.mp3Buffers = [];
    this.duration = 0;
  }

  startRecording() {
    this.reset();

    // create the audio capture node.
    const creator =
     // this.audioSrc.context.createScriptProcessor ||
      this.audioSrc.createJavaScriptNode;

    // create processor node.
    this.audioProcessorNode = creator.call(
      this.audioSrc.context,
      this.mp3EncoderConfigs.bufferSize,
      this.mp3EncoderConfigs.channel,
      this.mp3EncoderConfigs.channel
    );

    // connect the node between the audio source and destination.
    this.audioProcessorNode.onaudioprocess = this.onAudioProcess.bind(this);
    this.audioSrc.connect(this.audioProcessorNode);
    this.audioProcessorNode.connect(this.audioSrc.context.destination);

    if (this.onStartCallBack) {
      this.onStartCallBack();
    }

    this.startTime = Date.now();
    this.recording = true;
  }

  stopRecording() {
    this.recording = false;
    this.duration = Date.now() - this.startTime;

    // Disconnect the node
    this.audioProcessorNode.onaudioprocess = null;
    this.audioSrc.disconnect(this.audioProcessorNode);
    this.audioProcessorNode.disconnect();

    // Flush the last mp3 buffer.
    const mp3 = this.mp3Encoder.flush();
    if (mp3.length > 0) this.mp3Buffers.push(mp3);

    // Consolidate the collection of MP3 buffers into a single data Blob.
    const blob = new Blob(this.mp3Buffers, { type: "audio/mp3" });
    if (blob.size === 0 && this.onRecordingError) {
      this.onRecordingError();
      return;
    }

    if (this.onStopCallBack) {
      this.onStopCallBack({
        fileType: "audio/mp3",
        fileName: "recording.mp3",
        audioUrl: window.URL.createObjectURL(blob),
        blob: blob,
        duration: Math.floor(this.duration * 0.001),
        durationStr: this.convertToReadableTime(this.duration * 0.001)
      });
    }
  }

  onAudioProcess(e) {
    //Convert floating point to 16bit signed int.
    function convertFloatToInt16(inFloat) {
      var sampleCt = inFloat.length;
      var outInt16 = new Int16Array(sampleCt);
      for (var n1 = 0; n1 < sampleCt; n1++) {
        //This is where I can apply waveform modifiers.
        var sample16 = 0x8000 * inFloat[n1];
        //Clamp value to avoid integer overflow, which causes audible pops and clicks.
        sample16 =
          sample16 < -32767 ? -32767 : sample16 > 32767 ? 32767 : sample16;
        outInt16[n1] = sample16;
      }
      return outInt16;
    }

    //Cap output stream size
    //Convert floating-point to 16bit signed int.
    //This may modify the number of samples.
    let samples = e.inputBuffer.getChannelData(0);
    var samples16 = convertFloatToInt16(samples);
    if (samples16.length > 0) {
      //Encode PCM to mp3
      var mp3buffer = this.mp3Encoder.encodeBuffer(samples16);
      var mp3Ct = mp3buffer.length;
      if (mp3Ct > 0) {
        //Add buffer to in-memory output stream.
        this.mp3Buffers.push(mp3buffer);
      }
    }
  }

  recordingTimeDisplay() {
    return this.convertToReadableTime(this.recordingTime());
  }
  recordingTime() {
    return this.isRecording() ? (Date.now() - this.startTime) * 0.001 : 0;
  }
  isRecording() {
    return this.recording;
  }
  convertToReadableTime(timeInSec) {
    var sec = timeInSec | 0;
    return "" + this.minSecStr((sec / 60) | 0) + ":" + this.minSecStr(sec % 60);
  }
  minSecStr(n) {
    return (n < 10 ? "0" : "") + n;
  }
}
