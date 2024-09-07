/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from '@/App.vue'
import Vue3Lottie from 'vue3-lottie'

// Composables
import { createApp } from 'vue'
import store from '@/store'

const app = createApp(App)

registerPlugins(app)

// Install the store instance as a plugin
app.use(store)
app.use(Vue3Lottie)
app.mount('#app')
