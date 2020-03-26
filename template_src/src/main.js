import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
