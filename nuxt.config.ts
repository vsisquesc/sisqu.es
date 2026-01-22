// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  imports: {
    dirs: ['types/*.ts'],
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  // Configuración de @nuxt/fonts
fonts: {
  families: [
    // Special Gothic Expanded One
    {
      name: 'Special Gothic Expanded One',
      provider: 'google',
    },
    // Roboto Mono - Variable font
    {
      name: 'Roboto Mono',
      provider: 'google',
      weights: [100, 200, 300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
    // Fraunces - Variable font con ejes personalizados
    {
      name: 'Fraunces',
      provider: 'google',
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
  ],
},

  i18n: {
    compilation: {
      strictMessage: false,
      // escapeHtml: true,
    },
    // SEO recommendations
    baseUrl: 'localhost',
    locales: [{ code: 'en', iso: 'en-GB', name: 'English', file: 'en.json' }],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // SEO recommended
    },
  },
  app: {
    head: {
      title: 'SISQU.ES',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          key: 'description',
          name: 'description',
          content: 'SISQU.ES',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      // Carga manual de Fraunces con eje WONK
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,WONK@0..1,9..144,100..900,0..1&display=swap'
      },
    ],
    },
    baseURL: '/',
  },
  image: {
    provider: 'ipx',
    ipx: {
      // puedes configurar el ancho máximo, calidad, etc.
      // dir: 'public',
    },
  },
});
