import './index.css'

import { createApp } from 'vue'

import App from './App.vue'
import { initSessionForToday } from './composables/game-state'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

initSessionForToday()
