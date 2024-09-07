<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <v-btn @click="toggleTheme">
          Toggle theme
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="handleAlert">
          Alert !!!
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="handleIncrementStore">
          Increment the store
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="handleTestStoreModuleB">
          Test the module b
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed  } from 'vue'
import { useStore } from 'vuex'
import { useTheme } from 'vuetify'

export default defineComponent({
  setup() {
    // Data
    const store = useStore()
    const theme = useTheme()

    // Computed
    const count = computed(() => store.getters.getCount);

    // Functions
    const toggleTheme = () => {
      // Building theme apps: https://blog.logrocket.com/building-dynamic-vuetify-themes/
      theme.global.name.value = theme.global.name.value === 'customDarkTheme' ? 'customLightTheme' : 'customDarkTheme'
    }

    const handleAlert = () => {
      alert('Test')
    }

    const handleIncrementStore = () => {
      store.dispatch('incrementAction')
      console.log('Count in store:', count.value)
    }

    const handleTestStoreModuleB = () => {
      store.commit('b/activeModuleB')
    }

    return {
      toggleTheme,
      handleAlert,
      handleIncrementStore,
      handleTestStoreModuleB,
    }
  }
})
</script>

<style scoped></style>
