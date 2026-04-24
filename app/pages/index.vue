<template>
  <div>
    <HeroSection />
    <ProjectsSection />
    <SampleWorksSection />
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