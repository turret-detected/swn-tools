// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primeuix/themes/aura"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@primevue/nuxt-module',
  ],
  ssr: false,
  nitro: {
    static: true,
  },
  piniaPluginPersistedstate: {
    storage: "localStorage",
  },
  primevue: {
    autoImport: false,
    components: {
      include: ['Toast']
    },
    options: {
      theme: {
        preset: Aura,
      }
    }
  }
})