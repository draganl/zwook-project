import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
  ],
  fonts: {
    google: {
      families: {
        Inter: true,
      },
      weights: [400, 500, 600, 700],
      display: "swap",
      preload: true,
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
});
