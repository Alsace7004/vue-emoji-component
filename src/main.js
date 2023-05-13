import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "../node_modules/lamejs/lame.all.js"
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
