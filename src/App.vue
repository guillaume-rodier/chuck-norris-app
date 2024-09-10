<template>
  <v-theme-provider theme="myCustomLightTheme" with-background>
    <v-overlay
      v-model="isLoading"
      class="align-center justify-center"
      scrim="surface"
      contained
      persistent
    >
      <v-progress-circular
        :size="50"
        class="loading-item"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <Vue3Lottie :animationData="BabyBomb" :height="300" />
    </v-overlay>
    <v-app v-if="!isLoading" id="app">
      <v-layout>
        <v-main class="main-class">
          <router-view />
        </v-main>
      </v-layout>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { Vue3Lottie } from 'vue3-lottie'
import { BabyBomb } from '@/assets/lottieFiles'

// Data
const isLoading = ref<boolean>(true)

// Life cycle
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<style lang="scss">
:root {
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;

  .loading-item {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
  }

  .main-class {
    height: 100vh;
    overflow: auto !important;
  }
}
</style>
