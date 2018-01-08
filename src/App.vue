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
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
