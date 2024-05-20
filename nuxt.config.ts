// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'

  ],
  app: {
    head: {
      title: 'TTPMS v4',
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '@/assets/img/TESDA-Logo.png' }

      // ]
    }
  }
})
