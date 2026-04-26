// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }],
    sets: [
      {
        prefix: 'custom',
        dir: './app/assets/icons'
      }
    ]
  },
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  runtimeConfig: {
    coinmarketcapApiKey: process.env.COINMARKETCAP_API_KEY || '',
    public: {
      enableWebSocket: process.env.ENABLE_WEBSOCKET !== 'false',
    },
  },
})
