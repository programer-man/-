import { createStore } from 'vuex'
// vuex 持久化插件
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user.js'
import cart from './modules/cart.js'
import category from './modules/category.js'

export default createStore({
  // 数据
  state: {},

  // 改 数据 函数
  mutations: {},

  // 请求数据函数
  actions: {},

  // 分模块
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ],
  // vuex的计算属性
  getters: {}
})
