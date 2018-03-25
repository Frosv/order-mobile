<template>
  <div id="app">
    <title-top></title-top>
    <router-view/>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import titleTop from '@/components/title/title'
import navBottom from '@/components/nav/nav'

export default {
  name: 'app',
  components: {
    titleTop,
    navBottom
  },
  mounted() {
    this.init()
  },
  methods: {
    init: async function () {
      console.log('async start')
      await this.$axios.get('https://www.easy-mock.com/mock/5a09a4297b68855a07f77288/example/async')
        .then(response => {
          console.log(response)
        })
      await this.$axios.get('https://www.easy-mock.com/mock/5a09a4297b68855a07f77288/example/mock')
        .then(response => {
          console.log(response.data)
        })

      console.log('async end')
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
