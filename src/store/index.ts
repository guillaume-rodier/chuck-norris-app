import { createStore } from 'vuex'
import { ChuckNorrisStore } from '@/store/modules'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  modules: { ChuckNorrisStore },
  plugins: [createPersistedState()],
})
