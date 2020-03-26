<template>
  <div id="app">
    {{ message }} {{example}}
    <span class="">hola abcde</span>
  </div>
</template>

<script>
export default {
  computed: {
    example () {
      return this.$store.state.example
    }
  },
  data () {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    deviceready () {
      alert('deviceready')
    }
  },
  mounted () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
  }
}
</script>

<style lang="sass">
html, body
  background: orange

#app
  background: red
</style>
