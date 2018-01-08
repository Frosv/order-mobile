<template>
  <div class="content" id="content">
    内容
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  comments: {
    Swipe,
    SwipeItem
  }
}
</script>

<style>
.content {
  background-color: aquamarine;
  color: #fff;
  height: 100%;
}
</style>
