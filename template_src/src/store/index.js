import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    example: {
      open: false
    }
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
