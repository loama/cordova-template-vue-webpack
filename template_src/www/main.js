import Vue from 'vue'
import App from './App.vue'

// import router from './router.js'
import store from './store'

// import FastClick from 'fastclick'

Vue.config.productionTip = false

new Vue({
  mounted () {
    window.addEventListener('load', () => {
      // run after everything is in-place
      // FastClick.attach(document.body)
    })
  },
  render: h => h(App),
  // router,
  store
}).$mount('#app')
