import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const options: VueQueryPluginOptions = {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 20,
          gcTime: 1000 * 60 * 5,
          refetchOnWindowFocus: false,
          retry: 2,
        },
      },
    },
  }

  nuxtApp.vueApp.use(VueQueryPlugin, options)
})
