// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image-edge", "nuxt-icon", "@nuxt/image-edge"],
  runtimeConfig: {
    public: {
      MAPS_API_KEY: process.env.MAPS_API_KEY,
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/contact', '/about']
    }
  }
});
