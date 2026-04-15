<template>
  <section class="py-20">
    <div class="mb-16">
      <h2 class="text-4xl font-bold mb-4 text-green-400">Impact & Recognition</h2>
      <p class="text-gray-400 text-lg">Proven results across multiple organizations</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid md:grid-cols-4 gap-6 mb-16">
      <div v-for="stat in stats" :key="stat.label" 
           class="border border-gray-800 rounded-lg p-6 hover:border-green-600 transition">
        <p class="text-4xl font-bold text-green-400 mb-2">{{ stat.number }}</p>
        <p class="text-white font-semibold mb-1">{{ stat.label }}</p>
        <p class="text-gray-400 text-sm">{{ stat.description }}</p>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="mb-8">
      <h3 class="text-2xl font-bold text-white mb-8">What People Say</h3>
      
      <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div v-for="(testimonial, idx) in testimonials" :key="idx"
             :class="[
               'rounded-lg p-6 border transition',
               testimonial.highlight 
                 ? 'bg-gradient-to-br from-green-900/20 to-gray-900 border-green-600' 
                 : 'bg-gray-900/50 border-gray-800 hover:border-green-600'
             ]">
          
          <!-- Quote -->
          <p class="text-gray-300 mb-6 leading-relaxed italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="pt-6 border-t border-gray-700">
            <p class="font-semibold text-white">{{ testimonial.author }}</p>
            <p class="text-gray-400 text-sm">{{ testimonial.role }} at {{ testimonial.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials, stats } from '@/assets/js/testimonials-section.js';
</script>
