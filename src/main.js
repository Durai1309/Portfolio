import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedinIn, faGithub);
import './assets/style.css';
import './assets/responsive.css';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
      e.preventDefault();
    }
  });
