<template>
  <section class="py-20 text-center">
    <div class="mb-8">
      <h1 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        {{ heroData.name }}
      </h1>
      <p class="text-2xl text-gray-300 font-light">{{ heroData.title }}</p>
    </div>
    
    <p class="text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed text-lg">
      {{ heroData.description }}
    </p>

    <div class="flex justify-center gap-6 mb-12">
      <a :href="heroData.email_link" class="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition">
        {{ heroData.cta_button_text }}
      </a>
      <a :href="heroData.phone_link" class="px-6 py-3 border border-green-600 text-green-400 hover:bg-green-600/10 rounded-lg font-medium transition">
        {{ heroData.phone }}
      </a>
    </div>

    <div class="text-gray-500 text-sm">
      📍 {{ heroData.location }}
    </div>
  </section>
</template>

<script setup>
import { heroData } from '@/assets/js/hero-section.js';
</script>
