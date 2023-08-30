import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from './assets/css/style.css'
import icons from 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).use(css).use(bootstrap).use(icons).mount('#app')
