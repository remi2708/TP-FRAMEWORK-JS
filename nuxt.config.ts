export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [
    { path: '~/atomes', pathPrefix: false },
    { path: '~/molecules', pathPrefix: false },
    { path: '~/organismes', pathPrefix: false },
    { path: '~/templates', pathPrefix: false }
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Triathlon',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;600&display=swap' }
      ]
    }
  }
})
