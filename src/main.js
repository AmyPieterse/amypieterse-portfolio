import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css'


createApp(App).use(store).use(router).use(AOS.init()).mount('#app')
