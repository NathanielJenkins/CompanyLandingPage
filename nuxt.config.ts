// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      gtagId: "G-JJB9L26BE5",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://steepdeep.ski",
    },
  },
  modules: ["@nuxt/image", "nuxt-simple-sitemap"],
});
