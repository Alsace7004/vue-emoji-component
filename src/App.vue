

<template>
  <!-- <button @click="showModal">Toggle Modal</button> -->
  <!--  -->
  <!-- <WebAudioRecorderVue/> -->
    <div class="box">
      <!-- <div class="box__header">L'entete</div> -->
      <div class="box__body">
          <div class="box__body_item" v-for="emoj in emojis" :key="emoj">
            {{emoj.emoji}}
          </div>  
      </div>
      <!-- <div class="box__footer">
        The footer
      </div> -->
    </div>
  <!-- <Recorder/> -->
  <!--  -->
  <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        This is App.vue Modal header
      </template>
      <template v-slot:body>
        This is App.vue Modal body
      </template>
      <template v-slot:footer>
        This is App.vue Modal footer
      </template>
  </Modal>
</template>
<script>
      import { RouterLink, RouterView } from 'vue-router'
      import HelloWorld from './components/HelloWorld.vue'
      import Modal from "./components/Modal.vue";
      import WebAudioRecorderVue from './components/media-recorder/WebAudioRecorder.vue';
      import Mp3AudioRecorderVue from './components/mp3-recorder/Mp3AudioRecorder.vue';
      import Recorder from './components/recorder-worker/Recorder.vue';
  import emojis from "./emoji.js"
      export default{
          components:{
            Modal,Mp3AudioRecorderVue
          },
          data(){
            return{
              emojis:emojis,
              isModalVisible:false,
            }
          },
          methods:{
            showModal(){
              this.isModalVisible = true;
            },
            closeModal(){
              this.isModalVisible = false;
            },
          },
          
      }
</script>
<style scoped>
/*header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
/* **************************************** */
/*button + button {
  margin: 5px;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
.tools {
  margin: 10px 0px;
}
.audio-recorder {
  margin: 20px 10px;
  border: 1px solid blue;
  padding: 10px;
  text-align: left;
}
.audio {
  display: flex;
  align-items: center;
}
.audio h5 {
  order: 2;
  padding: 10px;
}
.audio audio {
  order: 1;
}*/
/*************************************************************** */

</style>
