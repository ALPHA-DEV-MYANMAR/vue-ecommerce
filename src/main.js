import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/js/main.js'
import './assets/js/admin.js'
import './assets/css/admin.css'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
