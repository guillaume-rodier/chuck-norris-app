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
        <v-btn
          color="primary-darken-2"
          text="Learn more"
          @click="handleShow"
        />

        <v-btn
          color="primary-darken-2"
          text="About page"
          @click="handleAbout"
        />

        <v-spacer />

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="handleShow"
        />
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <!-- Chuck Norris is best known for his acting and martial artist career. Here are the different facets of his profession:<br/>

            1. <b>Actor</b>: Chuck Norris is best known for his roles in action films and television series. He is particularly known for his leading role in the series Walker, Texas Ranger, as well as in films like Way of the Dragon (where he fought Bruce Lee), Delta Force, and the Missing in Action film series.<br/>

            2. <b>Martial Artist</b>: Before becoming an actor, Chuck Norris had a successful career in martial arts. He won numerous karate championship titles and founded his own martial arts school, Chun Kuk Do.<br/>

            3. <b>Producer and screenwriter</b>: Chuck Norris has also produced several of his films and series, and has sometimes contributed to the writing of the screenplays.<br/>

            4. <b>Author</b>: He has written several books, including on martial arts, philosophy, and even novels.<br/>

            In short, Chuck Norris is an actor, martial artist, producer, screenwriter, and author. -->
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import { useRouter } from 'vue-router'
import ChuckNorrisImg from '@/assets/img/Chuck-Norris-Roundhouse.jpg'

// Data
const router = useRouter()
const show = ref<boolean>(false)
const appTitle = ref<string>('Welcome to Chuck Norris app')

// Functions
const handleShow = () => {
  show.value = !show.value
}

const handleAbout = () => {
  router.push({ name: 'about' })
}
</script>
