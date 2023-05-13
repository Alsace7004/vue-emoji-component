<template>
  <div class="audio-recorder" ref="container">
    <div>
      <h3>MediaRecorder API</h3>
      <span>produce audio/webm, audio/ogg, audio/mp4</span>
    </div>
    <div class="tools">
      <button @click="handleRecordOrStop">{{ recordButtonLabel }}</button>
      <button @click="handleReset">Reset</button>
    </div>
    <div v-if="recordedAudios.length">
      <div
        class="audio"
        v-for="recordedAudio of recordedAudios"
        :key="recordedAudio.id"
      >
        <h5>{{ recordedAudio.fileName }}</h5>
        <audio controls="controls" :title="recordedAudio.fileName">
          <source :src="recordedAudio.fileUrl" :type="recordedAudio.fileType" />
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
import AudioRecorder from "./WebAudioRecorder.js";
export default {
  name: "WebAudioRecorder",
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
      if (!this.recorder.isRecording()) {
        this.recorder.startRecording();
        this.recordButtonLabel = "Stop";
      } else {
        this.recorder.stopRecording();
        this.recordButtonLabel = "Record";
      }
    },
    handleReset() {
      this.recordedAudios = [];
    },
    handleOnInitSuccess() {},
    handleOnInitFail(error) {
      if (error.code === 1) {
        alert("audio_recorder_not_support");
      } else if (error.code === 2) {
        alert("audio_recorder_blocked");
      } else if (error.code === 3) {
        alert("audio_recorder_not_detected");
      }
    },
    handleOnError() {
      alert("recording error");
    },
    handleOnStart() {
      this.interval = setInterval(() => {
        this.recordingDuration = this.recorder.recordingTimeDisplay();
        this.recordButtonLabel = this.recordingDuration;
      }, 1000);
    },
    handleOnStop(info) {
      clearInterval(this.interval);
      this.interval = null;
      this.recordedAudios.push({
        id: new Date().getTime().toString(),
        fileType: info.fileType,
        fileName: info.fileName,
        fileUrl: info.audioUrl,
        file: info.blob,
      });
    },
  },
  created() {
    this.recorder = new AudioRecorder({
      onInitSuccessCallBack: this.handleOnInitSuccess,
      onInitFailCallBack: this.handleOnInitFail,
      onStartCallBack: this.handleOnStart,
      onStopCallBack: this.handleOnStop,
      onRecordingError: this.handleOnError,
      maxNumOfChunks: 20,
    });
  },
};
</script>