import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  SharedElementDirective,
} from 'v-shared-element'
import './assets/tailwind.css'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api-us-east-1.graphcms.com/v2/ckuinz6vq1k2f01xpgvl9gc84/master',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(SharedElementDirective)
Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
