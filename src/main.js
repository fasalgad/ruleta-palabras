import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'

if(process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL='//localhost:8089'
}else{
  axios.defaults.baseURL='//dominiooficial.com'
}

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
