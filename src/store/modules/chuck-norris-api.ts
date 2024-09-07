export default {
  namespaced: true,
  state: () => ({
    testModuleB: false,
  }),
  getters: {
    testModuleB (state: any) {
      return state.testModuleB
    },
  },
  mutations: {
    activeModuleB (state: any) {
      // `state` is the local module state
      console.log('before testModuleB:', state.testModuleB)
      state.testModuleB = !state.testModuleB
      console.log('after testModuleB:', state.testModuleB)
    },
  },
  actions: {
    // TODO: some actions with https://api.chucknorris.io/#!
  },
}
