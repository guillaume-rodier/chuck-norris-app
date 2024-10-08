import axios from 'axios'
import { TChuckNorrisJoke, TChuckNorrisParams } from '@/types/chuckNorris'

export default {
  namespaced: true,
  state: () => ({
    randomChuckJoke: null,
    chuckNorrisCategoriesJoke: []
  }),
  getters: {
    getRandomChuckJokeState(state: any) {
      return state.randomChuckJoke
    },

    getChuckCategoriesState(state: any) {
      return state.chuckNorrisCategoriesJoke
    },
  },
  mutations: {
    saveChuckNorrisRandomJoke(state: any, payload: TChuckNorrisJoke) {
      state.randomChuckJoke = payload
    },

    saveChuckNorrisCategoriesJoke(state: any, categories: string[]) {
      state.chuckNorrisCategoriesJoke = categories
    },
  },
  actions: {
    // TODO: some actions with https://api.chucknorris.io/#!
    async getRandomChuckJokeAction({ commit } : { commit: any }, params: TChuckNorrisParams) {
      try {
        console.log('params API:', params)

        const response = await axios.get('https://api.chucknorris.io/jokes/random', { params })

        if ('data' in response && response.status === 200) {
          commit('saveChuckNorrisRandomJoke', response.data)
        }
      } catch(e) {
        console.error(e)
      }
    },

    async getChuckCategoriesJoke({ commit } : { commit: any }) {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')

        if ('data' in response && response.status === 200) {
          commit('saveChuckNorrisCategoriesJoke', response.data)
        }
      } catch(e) {
        console.error(e)
      }
    },
  },
}
