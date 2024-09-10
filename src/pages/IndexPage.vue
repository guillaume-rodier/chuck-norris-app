<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" class="index-container" height="100vh">
    <v-container class="content-container fill-height">
      <v-row justify="center">
        <v-col :col="12" :md="6" :lg="4">
          <ChuckNorrisSection class="ma-auto" />
        </v-col>
        <v-col :col="12" :md="6" :lg="4">
          <ChuckNorrisForm
            v-model:chuckNorrisParams="chuckNorrisParams"
            :loading-chuck-joke="loadingRandomChuckJoke"
            :loading-chuck-categories="loadingChuckCategories"
            @get-chuck-joke="doGetRandomChuckJokeAction"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { TChuckNorrisParams } from '@/types/chuckNorris'

// Data
const store = useStore()

const loadingRandomChuckJoke = ref<boolean>(false)

const loadingChuckCategories = ref<boolean>(false)

const chuckNorrisParams = ref<TChuckNorrisParams>({
  category: null,
  query: null,
})

// Life cycles
onMounted(async() => {
  await doGetRandomChuckJokeAction()
  await doGetChuckCategoriesJoke()
})

// Functions
const doGetRandomChuckJokeAction = async() => {
  loadingRandomChuckJoke.value = true

  await store.dispatch('ChuckNorrisStore/getRandomChuckJokeAction', chuckNorrisParams.value)

  setTimeout(() => {
    loadingRandomChuckJoke.value = false
  }, 1000)
}

const doGetChuckCategoriesJoke = async() => {
  loadingChuckCategories.value = true

  await store.dispatch('ChuckNorrisStore/getChuckCategoriesJoke')

  setTimeout(() => {
    loadingChuckCategories.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.index-container {
  .content-container {
    overflow: auto;
    height: 100%;
  }
}
</style>
