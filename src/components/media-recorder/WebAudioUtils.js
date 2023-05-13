//import { WavHeader, Mp3Encoder } from "lamejs";
import {WavHeader,Mp3Encoder} from "lamejs"

function getAudioInfo() {
  let mimeType;
  let ext;
  if (window.MediaRecorder.isTypeSupported("audio/ogg")) {
    mimeType = "audio/ogg";
    ext = "ogg";
  } else if (window.MediaRecorder.isTypeSupported("audio/webm")) {
    mimeType = "audio/webm";
    ext = "webm";
  } else if (window.MediaRecorder.isTypeSupported("audio/mp4")) {
    mimeType = "audio/mp4";
    ext = "m4a";
  }

  return { mimeType, ext };
}

/**
 * Re-engineered from https://github.com/zhuker/lamejs/blob/master/worker-example/worker.js
 * @param {*} arrayBuffer
 */
function encodeMp3(arrayBuffer) {
  const wav = WavHeader.readHeader(new DataView(arrayBuffer));
  const dataView = new Int16Array(arrayBuffer, wav.dataOffset, wav.dataLen / 2);
  const mp3Encoder = new Mp3Encoder(wav.channels, wav.sampleRate, 128);
  const maxSamples = 1152;

  console.log("wav", wav);

  const samplesLeft =
    wav.channels === 1
      ? dataView
      : new Int16Array(wav.dataLen / (2 * wav.channels));

  const samplesRight =
    wav.channels === 2
      ? new Int16Array(wav.dataLen / (2 * wav.channels))
      : undefined;

  if (wav.channels > 1) {
    for (var j = 0; j < samplesLeft.length; i++) {
      samplesLeft[j] = dataView[j * 2];
      samplesRight[j] = dataView[j * 2 + 1];
    }
  }

  let dataBuffer = [];
  let remaining = samplesLeft.length;
  for (var i = 0; remaining >= maxSamples; i += maxSamples) {
    var left = samplesLeft.subarray(i, i + maxSamples);
    var right;
    if (samplesRight) {
      right = samplesRight.subarray(i, i + maxSamples);
    }
    var mp3buf = mp3Encoder.encodeBuffer(left, right);
    dataBuffer.push(new Int8Array(mp3buf));
    remaining -= maxSamples;
  }

  const mp3Lastbuf = mp3Encoder.flush();
  dataBuffer.push(new Int8Array(mp3Lastbuf));
  return dataBuffer;
}

/**
 * Solution from https://www.russellgood.com/how-to-convert-audiobuffer-to-audio-file/
 * @param {*} file
 * @param {*} callback
 */
function downsampleToWav(file, callback) {
  //Browser compatibility
  // https://caniuse.com/?search=AudioContext
  window.AudioContext =
    window.AudioContext || window.webkitAudioContext || AudioContext;
  const audioCtx = new AudioContext();
  const fileReader1 = new FileReader();
  fileReader1.onload = function (ev) {
    // Decode audio
    audioCtx.decodeAudioData(ev.target.result).then(function (buffer) {
      // this is where you down sample the audio, usually is 44100 samples per second
      var offlineAudioCtx = new OfflineAudioContext({
        numberOfChannels: 1,
        length: 16000 * buffer.duration,
        sampleRate: 16000
      });

      let soundSource = offlineAudioCtx.createBufferSource();
      soundSource.buffer = buffer;
      soundSource.connect(offlineAudioCtx.destination);

      const reader2 = new FileReader();
      reader2.onload = function (ev) {
        offlineAudioCtx
          .startRendering()
          .then(function (renderedBuffer) {
            const buffer = bufferToWav(renderedBuffer, offlineAudioCtx.length);
            if (callback) {
              callback(buffer);
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      };
      reader2.readAsArrayBuffer(file);

      soundSource.start(0);
    });
  };

  fileReader1.readAsArrayBuffer(file);
}

/**
 * Convert AudioBuffer to a Blob using WAVE representation by adding wav header
 * Read https://www.cnblogs.com/blqw/p/3782420.html
 * @param {*} abuffer
 * @param {*} len
 */
function bufferToWav(abuffer, len) {
  var numOfChan = abuffer.numberOfChannels,
    length = len * numOfChan * 2 + 44,
    buffer = new ArrayBuffer(length),
    view = new DataView(buffer),
    channels = [],
    i,
    sample,
    offset = 0,
    pos = 0;

  // write WAVE header
  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8); // file length - 8
  setUint32(0x45564157); // "WAVE"

  setUint32(0x20746d66); // "fmt " chunk
  setUint32(16); // length = 16
  setUint16(1); // PCM (uncompressed)
  setUint16(numOfChan);
  setUint32(abuffer.sampleRate);
  setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
  setUint16(numOfChan * 2); // block-align
  setUint16(16); // 16-bit (hardcoded in this demo)

  setUint32(0x61746164); // "data" - chunk
  setUint32(length - pos - 4); // chunk length

  // write interleaved data
  for (i = 0; i < abuffer.numberOfChannels; i++)
    channels.push(abuffer.getChannelData(i));

  while (pos < length) {
    for (i = 0; i < numOfChan; i++) {
      // interleave channels
      sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; // scale to 16-bit signed int
      view.setInt16(pos, sample, true); // write 16-bit sample
      pos += 2;
    }
    offset++; // next source sample
  }

  return buffer;

  function setUint16(data) {
    view.setUint16(pos, data, true);
    pos += 2;
  }

  function setUint32(data) {
    view.setUint32(pos, data, true);
    pos += 4;
  }
}

export { downsampleToWav, encodeMp3, getAudioInfo };
