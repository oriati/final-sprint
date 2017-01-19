import './style.scss';
import './vendor';
import './vue-plugins';
// import '../../html5up-photon/assets/css/main.css';

import Vue from 'vue';
import store from './store';
import router from './routes';
import MainNav from './components/main-nav';

Vue.http.options.root = (process.env.NODE_ENV==='development' ? 'http://localhost:3003' : '');

const app = new Vue({
  router,
  store,
  components: {
    MainNav,
  }
}).$mount('#app');

