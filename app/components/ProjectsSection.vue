<template>
  <section id="projects" class="py-20">
    <h2 class="text-4xl font-bold mb-4 text-purple-400">Featured Projects</h2>
    <p class="text-gray-400 mb-12 text-lg">Real-world applications delivering measurable impact</p>
    
    <div class="space-y-8">
      <div v-for="(project, idx) in projects" :key="idx" 
           class="group border border-gray-800 rounded-lg p-8 hover:border-purple-600 hover:bg-gray-900/50 transition duration-300">
        
        <!-- Header -->
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition">
            {{ project.title }}
          </h3>
          <div class="flex items-center gap-4">
            <span class="text-purple-400 font-semibold">{{ project.company }}</span>
            <span class="text-gray-500">{{ project.role }}</span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-400 mb-6">{{ project.description }}</p>

        <!-- Metrics -->
        <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/40 rounded-lg">
          <div v-for="metric in project.metrics" :key="metric.label" class="text-center">
            <p class="text-purple-400 font-bold text-lg">{{ metric.value }}</p>
            <p class="text-gray-400 text-xs">{{ metric.label }}</p>
          </div>
        </div>

        <!-- Highlights -->
        <div class="mb-6">
          <h4 class="text-gray-300 font-semibold mb-3">Key Achievements:</h4>
          <ul class="space-y-2">
            <li v-for="(highlight, i) in project.highlights" :key="i" class="flex gap-3 text-gray-300">
              <span class="text-purple-500 flex-shrink-0">✦</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
          <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/assets/js/projects-section.js';
</script>
