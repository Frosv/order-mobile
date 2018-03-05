<template>
  <div class="tab">
    <router-link to="/">
      <i class="iconfont icon-home"></i>
      首页
    </router-link>
    <router-link to="/shop">
      <i class="iconfont icon-cart"></i>
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

}
</script>

<style>
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
}

.tab i{
  display: block;
  text-align: center;
  height: 1.1rem;
  font-size: 1.2rem;
}
</style>
