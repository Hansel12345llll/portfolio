
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/src/assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

console.log('Hello World');
const app = createApp(App)

app.use(router)

app.mount('#app')
