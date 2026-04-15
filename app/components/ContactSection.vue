<template>
  <section id="contact" class="py-20">
    <h2 class="text-4xl font-bold mb-12 text-purple-400">Get in Touch</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <a :href="contactInfo.phone.link" class="bg-gray-900 border border-gray-800 hover:border-purple-600 rounded-lg p-6 transition group">
        <div class="text-3xl mb-3 group-hover:text-purple-400 transition">{{ contactInfo.phone.icon }}</div>
        <h3 class="text-xl font-bold text-white mb-2">{{ contactInfo.phone.title }}</h3>
        <p class="text-gray-400">{{ contactInfo.phone.value }}</p>
      </a>

      <a :href="contactInfo.email.link" class="bg-gray-900 border border-gray-800 hover:border-purple-600 rounded-lg p-6 transition group">
        <div class="text-3xl mb-3 group-hover:text-purple-400 transition">{{ contactInfo.email.icon }}</div>
        <h3 class="text-xl font-bold text-white mb-2">{{ contactInfo.email.title }}</h3>
        <p class="text-gray-400 break-all">{{ contactInfo.email.value }}</p>
      </a>

      <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <div class="text-3xl mb-3">{{ contactInfo.location.icon }}</div>
        <h3 class="text-xl font-bold text-white mb-2">{{ contactInfo.location.title }}</h3>
        <p class="text-gray-400">{{ contactInfo.location.value }}<br>{{ contactInfo.location.valueSecond }}</p>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-400 mb-6">{{ ctaMessage }}</p>
      <a :href="`mailto:${ctaButtonEmail}`" 
         class="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition">
        {{ ctaButtonText }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { 
    contactInfo, 
    ctaMessage, 
    ctaButtonText, 
    ctaButtonEmail 
} from '@/assets/js/contact-section.js';
</script>
