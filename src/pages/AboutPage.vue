<template>
  <v-expand-transition>
    <v-container class="fill-height" fluid>
      <v-row>
        <v-col cols="auto" class="mx-auto">
          <v-sheet
            class="pa-4 text-center"
            elevation="6"
            max-width="700"
            rounded="lg"
            width="100%"
          >
            <v-icon
              class="mb-5"
              color="success"
              icon="mdi-check-circle"
              size="112"
            ></v-icon>

            <h2 class="text-h5 mb-6">
              The details page of Chuck&nbsp;Norris&nbsp;!
            </h2>

            <v-card-text>
              Chuck Norris is best known for his acting and martial artist career. Here are the
              different facets&nbsp;of&nbsp;his&nbsp;profession:<br/><br/>

              1. <b>Actor</b>: Chuck Norris is best known for his roles in action films and television
              series. He is particularly known for his leading role in the series Walker, Texas Ranger,
              as well as in films like Way of the Dragon (where he fought Bruce Lee), Delta Force, and
              the Missing in Action&nbsp;film&nbsp;series.<br/><br/>

              2. <b>Martial Artist</b>: Before becoming an actor, Chuck Norris had a successful career
              in martial arts. He won numerous karate championship titles and founded his own martial
              arts school, Chun&nbsp;Kuk&nbsp;Do.<br/><br/>

              3. <b>Producer and screenwriter</b>: Chuck Norris has also produced several of his films
              and series, and has sometimes contributed to the&nbsp;writing&nbsp;of&nbsp;the&nbsp;screenplays.<br/><br/>

              4. <b>Author</b>: He has written several books, including on martial arts, philosophy,
              and&nbsp;even&nbsp;novels.<br/><br/>

              In short, Chuck Norris is an actor, martial artist, producer, screenwriter, and author.
            </v-card-text>

            <v-divider class="mb-4" />

            <div class="text-end">
              <v-btn
                :elevation="4"
                class="text-none"
                color="primary"
                variant="flat"
                width="90"
                @click="goHome"
              >
                Go back
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-expand-transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    // Data
    const router = useRouter()

    // Functions
    const goHome = () => {
      router.push({ name: 'chuck-norris' })
    }

    return {
      goHome,
    }
  }
})
</script>

<style lang="scss" scoped></style>
