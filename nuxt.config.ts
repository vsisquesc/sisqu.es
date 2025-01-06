// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    app: {
        head: {
            title: "vsisquesc Portfolio",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
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

    modules: [// https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxtjs/color-mode", "@pinia/nuxt", "@nuxt/icon"],

    colorMode: {
        preference: "system",
        fallback: "light",
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "-mode",
        storage: "localStorage", // or 'sessionStorage' or 'cookie'
        storageKey: "nuxt-color-mode",
    },

    css: ["~/assets/css/main.css"],
    compatibilityDate: "2025-01-06",
})