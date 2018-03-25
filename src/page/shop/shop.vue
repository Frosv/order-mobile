<template>
  <div class="shop">
    购物车
  </div>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      console.log(1)
      // this.$store.commit('tipsHidden')
    }
  }
}
</script>

<style>
.shop {
  margin-top: 2.5rem;
}
</style>
