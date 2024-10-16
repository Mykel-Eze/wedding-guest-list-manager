// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
      title: "Wedding Guest List Manager",
      meta: [
        { name: "author", content: "GlowTrybe Tech." },
        { hid: "description", name: "description", content: "Use our easy-to-follow guide to manage your guest list efficiently!" },
        { name: "Keywords", content: "Wedding, guest, manager" },
        { name: "theme-color", content: "#f97316" },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ["constants/**", "composables/**"],
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }
})
