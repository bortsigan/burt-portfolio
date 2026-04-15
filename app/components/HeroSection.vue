<template>
  <section id="about" class="py-20 md:py-32 text-center">
    <!-- Main Headline -->
    <div class="mb-12">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight">
        {{ heroData.name }}
      </h1>
      <p class="text-2xl md:text-3xl text-gray-300 font-light mb-6">{{ heroData.title }}</p>
      <h2 class="text-xl md:text-2xl text-blue-400 font-semibold mb-8 max-w-3xl mx-auto">
        {{ heroData.headline }}
      </h2>
    </div>
    
    <!-- Description -->
    <p class="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
      {{ heroData.description }}
    </p>

    <!-- Quick Stats -->
    <div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
      <div v-for="stat in heroData.stats" :key="stat.label" class="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-600 transition">
        <p class="text-2xl font-bold text-blue-400">{{ stat.value }}</p>
        <p class="text-xs text-gray-400 mt-2">{{ stat.label }}</p>
      </div>
    </div>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <a :href="heroData.email_link" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105 duration-200">
        {{ heroData.cta_button_text }}
      </a>
      <a href="#contributions" class="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 font-semibold rounded-lg transition">
        {{ heroData.cta_button_secondary }}
      </a>
    </div>

    <!-- Location -->
    <div class="text-white-500 text-lg font-bold">
      🇵🇭 {{ heroData.location }}
    </div>
  </section>
</template>

<script setup>
import { heroData } from '@/assets/js/hero-section.js';
</script>
