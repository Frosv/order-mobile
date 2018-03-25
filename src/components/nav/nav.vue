<template>
  <div class="tab">
    <router-link to="/">
      <i class="iconfont icon-home"></i>
      首页
    </router-link>
    <router-link to="/shop">
      <i class="iconfont icon-cart"></i>
      <span class="num" v-show="count">{{count}}</span>
      购物车
    </router-link>
    <router-link to="/user">
      <i class="iconfont icon-people"></i>
      我的
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifShow: 1
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      // this.ifShow = 0
      // this.$store.commit('tipsShow')
      console.log('nav init')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    ifTipsShow() {
      return this.$store.state.ifTipsShow
    }
  }
}
</script>

<style scoped>
.tab {
  height: 2.5rem;
  background-color: rgb(228, 228, 228);
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}
.tab a {
  padding: 0 1rem;
  line-height: 1.8rem;
  color: #666;
  font-size: 0.5rem;
  position: relative;
}

.tab i {
  display: block;
  text-align: center;
  height: 1.1rem;
  font-size: 1.2rem;
}

.num {
  height: 1rem;
  width: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  border-radius: 50%;
  background-color: red;
  display: block;
  position: absolute;
  right: 0.7rem;
  top: 0;
}
</style>
