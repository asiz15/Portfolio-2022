import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  SharedElementDirective,
} from 'v-shared-element'
import './assets/tailwind.css'

Vue.use(SharedElementDirective)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
