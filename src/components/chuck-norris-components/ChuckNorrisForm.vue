<template>
  <div class="d-flex fill-height justify-center align-center chuck-joke-section">
    <v-card width="100%" elevation="4">
      <v-card-item>
        <v-card-title>
          Chuck Norris form
        </v-card-title>

        <v-card-subtitle>
          Get random jokes from Chuck Norris
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div class="d-flex align-center justify-center chuck-joke-container">
          <v-img
            :src="imageChuckJoke"
            :max-width="90"
            :width="90"
            aspect-ratio="1"
            class="mr-6"
          />
          <p>
            {{ theChuckJoke }}
          </p>
        </div>
      </v-card-text>

      <v-card-text>
        <v-select
          v-model="chuckNorrisParamsLocale.category"
          :items="chuckCategories"
          :loading="loadingChuckCategories"
          label="Select a joke category"
          variant="outlined"
          color="primary"
          density="compact"
          hide-details="auto"
          class="mb-4"
          clearable
          searchable
        ></v-select>
        <v-text-field
          v-model="chuckNorrisParamsLocale.query"
          label="Search a Chuck Norris joke"
          hide-details="auto"
          variant="outlined"
          color="primary"
          density="compact"
          clearable
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          :elevation="4"
          :loading="loadingChuckJoke"
          color="primary-darken-2"
          text="Another joke, please"
          @click="handleShow"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { TChuckNorrisJoke, TChuckNorrisParams } from '@/types/chuckNorris'

// Locale types
type TProps = {
  loadingChuckJoke: boolean,
  loadingChuckCategories: boolean,
  chuckNorrisParams: TChuckNorrisParams,
}

// Emits
const emit = defineEmits(['update:chuckNorrisParams', 'get-chuck-joke'])

// Data
const props = withDefaults(defineProps<TProps>(), {
  loadingChuckJoke: false,
  loadingChuckCategories: false,
})
const store = useStore()

// Computed
const chuckNorrisParamsLocale = computed<TChuckNorrisParams>({
  get () {
    return props.chuckNorrisParams
  },
  set (newValue) {
    emit('update:chuckNorrisParams', newValue)
  }
})

const chuckCategories = computed<string[]>(() => store.getters['ChuckNorrisStore/getChuckCategoriesState']);
const randomChuckJoke = computed<TChuckNorrisJoke>(() => store.getters['ChuckNorrisStore/getRandomChuckJokeState']);

const imageChuckJoke = computed<string | undefined>(() => randomChuckJoke.value.icon_url || undefined)
const theChuckJoke = computed<string | undefined>(() => randomChuckJoke.value.value || 'No current joke')

// Functions
const handleShow = () => emit('get-chuck-joke')
</script>

<style lang="scss" scoped>
.chuck-joke-section {
  .chuck-joke-container {
    p {
      width: 100%;
      max-width: 350px;
    }
  }
}
</style>
