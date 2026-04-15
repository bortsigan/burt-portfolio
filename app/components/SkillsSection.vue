<template>
  <section id="skills" class="py-20">
    <h2 class="text-4xl font-bold mb-12 text-purple-400">Skills & Expertise</h2>
    
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Technical Skills -->
      <div>
        <h3 class="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
        <div class="space-y-6">
          <div>
            <h4 class="text-purple-400 font-semibold mb-2">Programming Languages</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="lang in programmingLanguages" :key="lang" 
                    class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                {{ lang }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="text-purple-400 font-semibold mb-2">Frameworks & Libraries</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in frameworks" :key="tech"
                    class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                {{ tech }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="text-purple-400 font-semibold mb-2">Databases & Tools</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in databasesTools" :key="tool"
                    class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                {{ tool }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="text-purple-400 font-semibold mb-2">Testing & APIs</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in testingApis" :key="item"
                    class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                {{ item }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="text-purple-400 font-semibold mb-2">Advanced Tools</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in advancedTools" :key="tool"
                    class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div>
        <h3 class="text-2xl font-bold mb-6 text-white">Soft Skills</h3>
        <div class="space-y-4">
          <div v-for="skill in softSkills" :key="skill" class="flex items-start gap-3">
            <div class="text-purple-500 text-xl mt-1">✓</div>
            <div>
              <p class="font-semibold text-white">{{ skill.title }}</p>
              <p class="text-gray-400 text-sm">{{ skill.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Proficiencies Summary -->
    <div class="mt-12 grid md:grid-cols-4 gap-4">
      <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <p class="text-3xl font-bold text-purple-400">10+</p>
        <p class="text-gray-400 text-sm mt-1">Years Experience</p>
      </div>
      <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <p class="text-3xl font-bold text-purple-400">7+</p>
        <p class="text-gray-400 text-sm mt-1">Companies</p>
      </div>
      <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <p class="text-3xl font-bold text-purple-400">20+</p>
        <p class="text-gray-400 text-sm mt-1">Projects</p>
      </div>
      <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <p class="text-3xl font-bold text-purple-400">TDD</p>
        <p class="text-gray-400 text-sm mt-1">Certified Practices</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  programmingLanguages,
  frameworks,
  databasesTools,
  testingApis,
  advancedTools,
  softSkills
} from '@/assets/js/skills-section.js';
</script>
