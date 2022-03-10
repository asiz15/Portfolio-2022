import Vue from 'vue'
import Vuex from 'vuex'
import { projects } from './mocked_data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: projects
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
