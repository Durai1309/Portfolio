import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/style.css'
import './assets/responsive.css'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
  