<template>
  <section id="experience" class="py-20">
    <h2 class="text-4xl font-bold mb-12 text-blue-400">Experience</h2>
    
    <div class="space-y-8">
      <div v-for="(job, idx) in experiences" :key="idx" class="border-l-2 border-blue-600 pl-6 py-4">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-2xl font-bold text-white">{{ job.position }}</h3>
            <p class="text-blue-400 font-medium">{{ job.company }}</p>
          </div>
          <span class="text-white text-sm whitespace-nowrap font-bold">{{ job.period }}</span>
        </div>
        
        <ul class="text-gray-300 space-y-2 mt-4">
          <li v-for="(achievement, i) in job.achievements" :key="i" class="flex gap-3">
            <span class="text-blue-500 shrink-0 mt-1">▸</span>
            <span>{{ achievement }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '@/assets/js/experience-section.js';
</script>
