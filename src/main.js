import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import useful from 'useful-simple-functions'

Vue.config.productionTip = false

Vue.prototype.$useful = useful

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
