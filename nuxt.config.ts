// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "vsisquesc Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Víctor Sisqués' portfolio",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
    baseURL: "/",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // '@nuxtjs/eslint-module',
    // https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/css/main.css"],
})