import {
  downsampleBuffer,
  mergeBuffers,
  encodeWAV
} from "./RecorderProcessorUtils.js";

export default class AudioProcessor {
  constructor(sampleRate) {
    this.recLength = 0;
    this.recBuffer = [];
    this.recordSampleRate = sampleRate;
  }

  record(inputBuffer) {
    this.recBuffer.push(inputBuffer[0]);
    this.recLength += inputBuffer[0].length;
  }

  exportBuffer(callback, exportSampleRate) {
    const mergedBuffers = mergeBuffers(this.recBuffer, this.recLength);
    const downsampledBuffer = this.downsample(mergedBuffers, exportSampleRate);
    const encodedWav = encodeWAV(downsampledBuffer, this.recordSampleRate);
    const audioBlob = new Blob([encodedWav], {
      type: "application/octet-stream"
    });
    callback(audioBlob);
  }

  clear() {
    this.recLength = 0;
    this.recBuffer = [];
  }

  downsample(mergedBuffers, exportSampleRate) {
    if (this.recordSampleRate === exportSampleRate) return mergedBuffers;
    const sampleRateRatio = this.recordSampleRate / exportSampleRate;
    return downsampleBuffer(mergedBuffers, sampleRateRatio);
  }
}
