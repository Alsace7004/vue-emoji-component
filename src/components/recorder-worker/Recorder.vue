<template>
  <div class="audio-recorder" ref="container">
    <div class="tools">
      <button @click="handleRecordOrStop">{{ recordButtonLabel }}</button>
      <button @click="handleReset">Reset</button>
    </div>

    <div v-if="recordedAudios.length">
      <div v-for="recordedAudio of recordedAudios" :key="recordedAudio.id">
        <div>
          <audio controls="controls" :title="recordedAudio.fileName">
            <source
              :src="recordedAudio.fileUrl"
              :type="recordedAudio.fileType"
            />
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RecorderControl from "./RecorderControl.js";
export default {
  name: "Recorder",
  data() {
    return {
      recorder: null,
      interval: null,
      recordingDuration: "00:00",
      recordButtonLabel: "Record",
      recordedAudios: [],
    };
  },
  methods: {
    handleRecordOrStop() {
      let wavReady = function (buffer) {
        if (typeof buffer === "undefined") return;
        this.recorder.play(buffer);
        let myBlob = new Blob([buffer]);
        this.recordedAudios.push({
          id: new Date().getTime().toString(),
          fileType: "application/mpeg",
          fileName: "recoding.wav",
          fileUrl: window.URL.createObjectURL(myBlob),
          file: myBlob,
        });
      };

      if (!this.recorder.isRecording()) {
        this.recorder.startRecording();
        this.recordButtonLabel = "Stop";
      } else {
        this.recorder.stopRecording();
        this.recorder.exportWAV(wavReady.bind(this), 16000);

        this.recordButtonLabel = "Record";
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    handleReset() {
      this.recordedAudios = [];
    },
  },
  created() {
    this.recorder = new RecorderControl();
  },
};
</script>