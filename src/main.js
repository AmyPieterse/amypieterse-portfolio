import { createApp } from 'vue'
import App from './App_v3.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



createApp(App).use(store).use(router).use(AOS.init()).mount('#app')

gsap.registerPlugin(ScrollTrigger);

