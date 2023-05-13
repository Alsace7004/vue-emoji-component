import RecorderProcessor from "./RecorderProcessor.js";
export default class Recorder {
  constructor(source, silenceDetectionConfig) {
    this.silenceDetectionConfig = silenceDetectionConfig || {};
    this.silenceDetectionConfig.time = 1500;
    this.silenceDetectionConfig.amplitude = 0.2;
    this.recording = false;
    this.recorderProcessor = null;
    this.start = null;
    this.silenceCallback = null;
    this.visualizationCallback = null;
    this.analyser = null;

    /**
     * Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel
     * The onaudioprocess event handler of the ScriptProcessorNode interface. It is the EventHandler to be
     * called for the audioprocess event that is dispatched to ScriptProcessorNode node types.
     */
    var node = source.context.createScriptProcessor(4096, 1, 1);
    this.recorderProcessor = new RecorderProcessor(source.context.sampleRate);
    node.onaudioprocess = this.audioCallback.bind(this);
    this.setupAnalyzer(source, node);
    node.connect(source.context.destination);
  }

  audioCallback(audioProcessingEvent) {
    if (!this.recording) return;
    this.recorderProcessor.record([
      audioProcessingEvent.inputBuffer.getChannelData(0)
    ]);
    this.analyse();
  }

  setupAnalyzer(source, node) {
    this.analyser = source.context.createAnalyser();
    this.analyser.minDecibels = -90;
    this.analyser.maxDecibels = -10;
    this.analyser.smoothingTimeConstant = 0.85;
    source.connect(this.analyser);
    this.analyser.connect(node);
  }

  /**
   * Sets the silence and viz callbacks, resets the silence start time, and sets recording to true.
   * @param {?onSilenceCallback} onSilence - Called when silence is detected.
   * @param {?visualizerCallback} visualizer - Can be used to visualize the captured buffer.
   */
  record(onSilence, visualizer) {
    this.silenceCallback = onSilence || function () {};
    this.visualizationCallback = visualizer || function () {};
    this.start = Date.now();
    this.recording = true;
  }

  stop() {
    this.recording = false;
  }

  isRecording() {
    return this.recording;
  }

  clear() {
    this.stop();
    this.recorderProcessor.clear();
  }

  exportWAV(callback, sampleRate) {
    this.recorderProcessor.exportBuffer(callback, sampleRate);
  }

  /**
   * Checks the time domain data to see if the amplitude of the audio waveform is more than
   * the silence threshold. If it is, "noise" has been detected and it resets the start time.
   * If the elapsed time reaches the time threshold the silence callback is called. If there is a
   * visualizationCallback it invokes the visualization callback with the time domain data.
   */
  analyse() {
    this.analyser.fftSize = 2048;
    var bufferLength = this.analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);
    var amplitude = this.silenceDetectionConfig.amplitude;
    var time = this.silenceDetectionConfig.time;

    this.analyser.getByteTimeDomainData(dataArray);

    if (typeof visualizationCallback === "function") {
      this.visualizationCallback(dataArray, bufferLength);
    }

    for (var i = 0; i < bufferLength; i++) {
      // Normalize between -1 and 1.
      var curr_value_time = dataArray[i] / 128 - 1.0;
      if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
        this.start = Date.now();
      }
    }
    var newtime = Date.now();
    var elapsedTime = newtime - this.start;
    if (elapsedTime > time) {
      this.silenceCallback();
    }
  }
}
