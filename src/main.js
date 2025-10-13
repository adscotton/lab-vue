import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// ⚠️ Create Pinia and app first
const pinia = createPinia()
const app = createApp(App)

// ✅ Then use Pinia and router
app.use(pinia)
app.use(router)

// ✅ Mount after everything is ready
app.mount('#app')
