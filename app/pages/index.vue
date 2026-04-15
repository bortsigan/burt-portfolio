<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { seoConfig } from '@/assets/js/seo-config.js';

useHead({
  title: seoConfig.title,
  meta: [
    {
      name: 'description',
      content: seoConfig.description
    }
  ]
});
</script>