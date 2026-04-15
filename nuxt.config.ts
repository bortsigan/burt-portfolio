import tailwindcss from "@tailwindcss/vite";
import { seoConfig } from "./app/assets/js/seo-config.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  
  // Global SEO Configuration
  app: {
    head: {
      title: seoConfig.title,
      meta: [
        { name: 'description', content: seoConfig.description },
        { name: 'keywords', content: seoConfig.keywords },
        { name: 'author', content: seoConfig.authorName },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        
        // Open Graph Meta Tags
        { property: 'og:title', content: seoConfig.ogTitle },
        { property: 'og:description', content: seoConfig.ogDescription },
        { property: 'og:type', content: seoConfig.type },
        { property: 'og:url', content: seoConfig.ogUrl },
        { property: 'og:image', content: seoConfig.ogImage },
        { property: 'og:locale', content: seoConfig.locale },
        
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: seoConfig.twitterCard },
        { name: 'twitter:title', content: seoConfig.ogTitle },
        { name: 'twitter:description', content: seoConfig.ogDescription },
        { name: 'twitter:image', content: seoConfig.ogImage },
      ],
      link: [
        { rel: 'canonical', href: seoConfig.ogUrl },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
