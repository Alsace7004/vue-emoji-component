import { downsampleToWav, encodeMp3, getAudioInfo } from "./WebAudioUtils.js";

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
    this.mediaRecorder = null;
    this.chunks = [];
    this.audioInfo = getAudioInfo();

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
    } else if (!window.MediaRecorder) {
      if (this.onInitFailCallBack) {
        this.onInitFailCallBack({
          code: 1 //"Browser not support as MediaRecorder is not implemented in this browser "
        });
      }
    } else {
      const constraints = {
        audio: {
          channelCount: 1,
          sampleRate: 16000, // not working, it will follow device settings, usually 44.1kHz
          sampleSize: 16,
          volume: 1
        }
      };

      navigator.mediaDevices
        .getUserMedia({ audio: constraints })
        .then(this.handleSuccess.bind(this), this.handleError.bind(this));
    }
  }
  handleSuccess(stream) {
    // check browser capabilities, firefox dont support
    // let track = stream.getAudioTracks()[0];
    // console.log(track.getCapabilities());

    this.mediaRecorder = new window.MediaRecorder(stream, {
      audioBitsPerSecond: "128000",
      mimeType: this.audioInfo.mimeType
    });

    this.mediaRecorder.onstop = this.mediaRecorderOnStop.bind(this);
    this.mediaRecorder.ondataavailable = function (event) {
      this.chunks.push(event.data);
      if (this.chunks.length === this.maxNumOfChunks) {
        this.stopRecording();
      }
    }.bind(this);

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
  startRecording() {
    // set time slice of each chunk is 30 sec
    if (this.mediaRecorder) {
      this.mediaRecorder.start(30000);
      this.startTime = Date.now();
    }

    if (this.onStartCallBack) {
      this.onStartCallBack();
    }
  }
  stopRecording() {
    this.duration = Date.now() - this.startTime;

    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
    }
  }
  mediaRecorderOnStop() {
    const onStopCallBack = this.onStopCallBack;
    if (!onStopCallBack) return;

    const dur = Math.floor(this.duration * 0.001);
    const durStr = this.convertToReadableTime(dur * 0.001);
    const blob = new Blob(this.chunks);
    if (blob.size === 0 && this.onRecordingError) {
      this.onRecordingError();
      return;
    }

    const fileType = this.audioInfo.mimeType;
    const fileExt = this.audioInfo.ext;
    const file = new File([blob], `recording.${fileExt}`, {
      type: blob.type
    });

    console.debug(file);

    console.time("processing");
    console.time("down_sampling");
    downsampleToWav(file, function (buffer) {
      console.timeEnd("down_sampling");
      console.time("encode_mp3");
      const mp3Buffer = encodeMp3(buffer);
      console.timeEnd("encode_mp3");
      const mp3blob = new Blob(mp3Buffer, { type: "audio/mp3" });
      console.timeEnd("processing");

      onStopCallBack({
        fileType: "audio/mp3",
        fileName: "recording.mp3",
        audioUrl: window.URL.createObjectURL(mp3blob),
        blob: mp3blob,
        duration: dur,
        durationStr: durStr
      });

      // const wavBlob = new Blob([buffer], { type: "audio/wav" });
      // onStopCallBack({
      //   fileType: "audio/wav",
      //   fileName: "recording.wav",
      //   audioUrl: window.URL.createObjectURL(wavBlob),
      //   blob: wavBlob,
      //   duration: dur,
      //   durationStr: durStr
      // });

      // onStopCallBack({
      //   fileType: fileType,
      //   fileName: file.name,
      //   audioUrl: window.URL.createObjectURL(blob),
      //   blob: blob,
      //   duration: dur,
      //   durationStr: durStr
      // });
    });

    // reset
    this.chunks = [];
    this.duration = 0;
  }
  recordingTimeDisplay() {
    return this.convertToReadableTime(this.recordingTime());
  }
  recordingTime() {
    return this.isRecording() ? (Date.now() - this.startTime) * 0.001 : 0;
  }
  isRecording() {
    return this.mediaRecorder && this.mediaRecorder.state === "recording";
  }
  convertToReadableTime(timeInSec) {
    var sec = timeInSec | 0;
    return "" + this.minSecStr((sec / 60) | 0) + ":" + this.minSecStr(sec % 60);
  }
  minSecStr(n) {
    return (n < 10 ? "0" : "") + n;
  }
}
