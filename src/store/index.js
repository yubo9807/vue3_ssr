import { createStore } from 'vuex'

// 创建一个新的 store 实例
export const store = createStore({
  state () {
    return {
      count: "Hello vue3.0 SSR vite!"
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})