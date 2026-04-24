<template>
  <section id="sample-works" class="py-20">
    <h2 class="text-4xl font-bold mb-4 text-blue-400">Sample Works</h2>
    <p class="text-gray-400 mb-12 text-lg">Small side builds and demos you can poke at live.</p>

    <div class="space-y-8">
      <div v-for="(work, idx) in works" :key="idx"
           class="group border border-gray-800 rounded-lg p-8 hover:border-blue-600 hover:bg-gray-900/50 transition duration-300">

        <div class="mb-4">
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
            {{ work.title }}
          </h3>
          <p class="text-gray-400">{{ work.description }}</p>
        </div>

        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tech in work.technologies" :key="tech"
                class="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
            {{ tech }}
          </span>
        </div>

        <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
          <a :href="work.code" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:border-blue-500 hover:text-blue-400 transition text-sm">
            <span>View Code</span>
          </a>
          <a :href="work.demo" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition text-sm">
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { works } from '@/assets/js/sample-works-section.js';
</script>
