<template>
  <div class="content" id="content">
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item class="swipe-item">1</mt-swipe-item>
      <mt-swipe-item class="swipe-item">2</mt-swipe-item>
      <mt-swipe-item class="swipe-item">3</mt-swipe-item>
    </mt-swipe>
    <ul class="food-list">
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill"></i>
        </div>
      </li>
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill" @click="a"></i>
        </div>
      </li>
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill"></i>
        </div>
      </li>
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill"></i>
        </div>
      </li>
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill"></i>
        </div>
      </li>
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill"></i>
        </div>
      </li>
      <li class="food-list-box clearfix">
        <div class="list-left">
          <img src="http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061706277305.png" alt="" height="80" width="105">
          <div class="food-info">
            <p>巨无霸</p>
            <p class="details-info">美味多汁双层巨无霸</p>
          </div>
        </div>
        <div class="list-right">
          <i class="iconfont icon-like"></i>
          <i class="iconfont icon-roundaddfill"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  comments: {
    Swipe,
    SwipeItem
  },
  methods: {
    a: function () {
      this.$emit('add')
    }
  }
}
</script>

<style>
.content {
  color: #fff;
  height: 100%;
  margin-top: 2.5rem;
}

.swipe {
  height: 8rem;
  text-align: center;
  background-color: blueviolet;
}

.swipe-item {
  line-height: 7rem;
}

.food-list {
  overflow: auto;
  height: 20.5rem;
}

.food-list-box {
  padding: 10px;
  border: 1px solid rgb(211, 211, 211);
}

.list-left {
  float: left;
  width: 86%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-left img {
  float: left;
}

.list-left .food-info {
  color: #000;
  float: left;
  padding: 10px;
}

.details-info {
  color: rgb(201, 201, 201);
  font-size: 0.6rem;
  padding: 0.2rem 0;
}

.list-right {
  float: right;
}

.icon-like {
  display: block;
  color: #333;
  text-align: right;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

.icon-roundaddfill {
  color: red;
  font-size: 1.8rem;
}
</style>
