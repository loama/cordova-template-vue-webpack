<template>
  <div id="app">
    {{ message }}
    <span class="">hola abcde</span>
  </div>
</template>

<script>
export default {
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
