import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Wise Wrong',
    count: 0
  },
  mutations: {
    addFood(state) {
      state.count++
    },
    removeFood(state) {
      state.count--
    }
  }
})

export default store
