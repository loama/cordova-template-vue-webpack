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
  }
}
</script>

<style lang="sass">
html, body
  background: orange

#app
  background: red
</style>
