import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
buildModules: [
      '@nuxt/postcss8',
      '@nuxtjs/tailwindcss'
      // ...
    ],
    css: [
        '@/assets/css/main.css',
      ],
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
        },
      }
}