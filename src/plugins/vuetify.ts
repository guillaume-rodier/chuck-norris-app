/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { mdi } from "vuetify/iconsets/mdi"
import { customSets } from "@/iconsets/custom"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

// Composables
import { createVuetify, type ThemeDefinition  } from 'vuetify'

// Themes
// Examples for palettes
// https://coolors.co/1c0f13-6e7e85-b7cece-bbbac6-e2e2e2
const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#008000",
    secondary: "#00ccff",
    background: "#fbfbfb",
    surface: "#ffeedd",
    success: "#4caf50",
    error: "#b00020",
    warning: "#fb8c00",
    weborama: "#C11F2F",
    fanprime: "#FE4753",
    ayctor: "#8B8680",
    epitech: '#2C94D1',
    epsi: '#271549',
    saintVincent: '#212D45',
  },
}

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#900C3F",
    secondary: "#03dac6",
    background: "#15202b",
    surface: "#15202b",
    success: "#4caf50",
    error: "#b00020",
    warning: "#fb8c00",
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  theme: {
    defaultTheme: 'customLightTheme',
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 3,
      darken: 5,
    },
    themes: {
      customLightTheme,
      customDarkTheme,
    },
  },
  directives,
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
        custom: customSets,
      },
    },
})
