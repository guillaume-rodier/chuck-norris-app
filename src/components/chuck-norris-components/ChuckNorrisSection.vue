<template>
  <div class="d-flex fill-height justify-center align-center">
    <v-card width="100%" max-width="344" elevation="4">
      <template v-slot:title>
        <v-tooltip :text="appTitle" location="top">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="font-weight-black">
              {{ appTitle }}
            </span>
          </template>
        </v-tooltip>
      </template>

      <v-img
        :src="ChuckNorrisImg"
        aspect-ratio="1.15"
        cover
      />

      <v-card-title>
        Chuck Norris
      </v-card-title>

      <v-card-subtitle>
        Actor and martial artist
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer />
        <v-btn
          :elevation="4"
          color="primary-darken-2"
          text="Learn more"
          @click="handleAbout"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, } from 'vue'
import { useRouter } from 'vue-router'
import ChuckNorrisImg from '@/assets/img/Chuck-Norris-Roundhouse.jpg'

// Data
const router = useRouter()
const appTitle = ref<string>('Welcome to Chuck Norris app')

// Functions
const handleAbout = () => {
  router.push({ name: 'about' })
}
</script>
