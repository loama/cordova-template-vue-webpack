// Import Vue
import Vue from 'vue'

// Import fastClick
import FastClick from 'fastclick'

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './main.vue'

// Import Vuex Storage
import store from './assets/vuex/storage.js'

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  render: c => c('app'),
  components: {
    app
  },
  mounted() {
    window.addEventListener('load', () => {
      // run after everything is in-place
      FastClick.attach(document.body);
    });
  }
});
