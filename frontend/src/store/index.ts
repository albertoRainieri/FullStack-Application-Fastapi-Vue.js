import { createStore } from 'vuex'

export default createStore({
  strict: true, // process.env.NODE_ENV !== 'production',
  state: {
    isSidebarMinimized: false,
    userName: 'Alberto R'
  },
  mutations: {
    updateSidebarCollapsedState(state, isSidebarMinimized) {
      state.isSidebarMinimized = isSidebarMinimized
    },
    changeUserName(state, newUserName) {
      state.userName = newUserName
    }
  },
})