// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        payloadExtraction: true,
    },
    imports: {
        dirs: ["types/*.ts"],
    },
    devServer: {
        port: 3000,
    },
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    ssr: false,
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    plugins: ["~/plugins/eventBus.ts", "~/plugins/api.ts"],
    modules: [
        // https://tailwindcss.nuxtjs.org/
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n",
        "@nuxtjs/color-mode",
        "@pinia/nuxt",
        "@nuxt/icon",
        "@nuxt/image",
    ],

    i18n: {
        compilation: {
            strictMessage: false,
            // escapeHtml: true,
        },
        // SEO recommendations
        baseUrl: "localhost",
        locales: [
            { code: "en", iso: "en-GB", name: "English", file: "en.json" },
        ],
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
        defaultLocale: "en",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root", // SEO recommended
        },
    },

    app: {
        head: {
            title: "SISQU.ES",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "SISQU.ES",
                },
                { name: "format-detection", content: "telephone=no" },
            ],
            link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
        },
        baseURL: "/",
    },

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
})
