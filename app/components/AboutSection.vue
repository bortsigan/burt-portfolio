<template>
  <section id="about" class="py-20">
    <h2 class="text-4xl font-bold mb-8 text-green-400">About Me</h2>
    
    <div class="bg-gray-900 border border-gray-800 rounded-lg p-8">
      <p v-for="(paragraph, idx) in aboutContent.paragraphs" :key="idx" class="text-gray-300 leading-relaxed mb-4">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { aboutContent } from '@/assets/js/about-section.js';
</script>
