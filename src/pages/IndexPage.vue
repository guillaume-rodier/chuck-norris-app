<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" class="index-container" height="100vh">
    <v-container class="content-container fill-height">
      <v-row>
        <v-col :col="12" :md="6" :lg="4">
          <ChuckNorrisSection class="ma-auto" />
        </v-col>
        <v-col :col="12" :md="6" :lg="8">
          <ChuckNorrisForm
            v-model:chuckNorrisParams="chuckNorrisParams"
            :loading="loading"
            @get-chuck-joke="doGetRandomChuckJokeAction"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useStore } from 'vuex'
import { TChuckNorrisParams } from '@/types/chuckNorris'

// Data
const { lgAndUp } = useDisplay()
const store = useStore()

const loading = ref<boolean>(false)

const chuckNorrisParams = ref<TChuckNorrisParams>({
  category: null,
  query: null,
})

// Computed
const computedContainerWidth = computed<string>(() => lgAndUp.value ? '70%' : '100%')

// Watchers
watch(computedContainerWidth, () => {
  console.log('computedContainerWidth:', computedContainerWidth.value)
})

// Life cycles
onMounted(async() => {
  loading.value = true
  await doGetRandomChuckJokeAction()
  await store.dispatch('ChuckNorrisStore/getChuckCategoriesJoke')

  setTimeout(() => {
    loading.value = false
  }, 1000)
})

// Functions
const doGetRandomChuckJokeAction = async() => {
  await store.dispatch('ChuckNorrisStore/getRandomChuckJokeAction', chuckNorrisParams.value)
}
</script>

<style scoped lang="scss">
.index-container {
  .content-container {
    overflow: auto;
    height: 100%;
  }
}
</style>
