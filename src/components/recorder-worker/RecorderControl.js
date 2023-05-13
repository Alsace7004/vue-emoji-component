import AudioRecorder from "./Recorder.js";
export default class RecoderControl {
  constructor() {
    this.audioRecorder = null;
    this.audioSupported = null;
    this.audioContext = null;
    this.audioStream = null;
    this.audioSource = null;
    this.recording = false;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.requestDevice()
        .then((stream) => {
          this.audioSupported = true;
        })
        .catch((error) => {
          this.audioSupported = false;
        });
    } else {
      this.audioSupported = false;
    }
  }

  requestDevice() {
    if (!this.audioContext) {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
      console.debug("AudioContext");
      console.debug(this.audioContext);
    }

    return navigator.mediaDevices.getUserMedia({ audio: true }).then(
      (stream) => {
        this.audioStream = stream;
        console.debug("audioStream");
        console.debug(stream);
      },
      (error) => {
        console.error(error.name);
      }
    );
  }

  startRecording(onSilence, visualizer, silenceDetectionConfig) {
    if (!this.audioSupported) {
      throw new Error("Audio is not supported.");
    }
    onSilence = onSilence || function () {};
    visualizer = visualizer || function () {};
    this.audioSource = this.audioContext.createMediaStreamSource(
      this.audioStream
    );
    console.debug("audioSource");
    console.debug(this.audioSource);
    this.audioRecorder = new AudioRecorder(
      this.audioSource,
      silenceDetectionConfig
    );
    this.audioRecorder.record(onSilence, visualizer);
    this.recording = true;
  }

  stopRecording() {
    this.audioRecorder.stop();
    this.recording = false;
  }

  isRecording() {
    return this.recording;
  }

  exportWAV(callback, sampleRate) {
    sampleRate = typeof sampleRate !== "undefined" ? sampleRate : 16000;
    this.audioRecorder.exportWAV(callback, sampleRate);
    this.audioRecorder.clear();
  }

  play(buffer) {
    var myBlob = new Blob([buffer]);

    let _audioContext = this.audioContext;
    let _playbackSource = _audioContext.createBufferSource();
    // We'll use a FileReader to create and ArrayBuffer out of the audio response.
    var fileReader = new FileReader();
    fileReader.onload = function () {
      // Once we have an ArrayBuffer we can create our BufferSource and decode the result as an AudioBuffer.

      _audioContext.decodeAudioData(this.result, function (buf) {
        // Set the source buffer as our new AudioBuffer.
        _playbackSource.buffer = buf;
        // Set the destination (the actual audio-rendering device--your device's speakers).
        _playbackSource.connect(_audioContext.destination);
        // Add an "on ended" callback.
        _playbackSource.onended = function (event) {
          console.log("ended");
        };
        // Start the playback.
        _playbackSource.start(0);
      });
    };
    fileReader.readAsArrayBuffer(myBlob);
  }
}
