import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import shop from '@/page/shop/shop'
import user from '@/page/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
