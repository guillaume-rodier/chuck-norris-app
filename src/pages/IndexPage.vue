<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" height="100vh">
    <div class="d-flex flex-column fill-height justify-center align-center text-white pa-6">
      <ChuckNorrisSection class="ma-auto" />
    </div>
  </v-parallax>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useDisplay } from 'vuetify'

// Data
const { lgAndUp } = useDisplay()

// Computed
const computedContainerWidth = computed<string>(() => lgAndUp.value ? '70%' : '100%')

watch(computedContainerWidth, () => {
  console.log('computedContainerWidth:', computedContainerWidth.value)
})
</script>

<style scoped lang="scss"></style>
