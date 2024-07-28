import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";

// 引入国际化i18n
import i18n from '@/i18n/index.js'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
