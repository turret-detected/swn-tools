// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  ssr: true,
  nitro: {
    static: true
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true
      }
    }
  }
})