<template>
  <svg
    :class="['inline-block', size, className]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="getIcon(name)"
  />
</template>

<script setup>
import { computed } from 'vue';
import { icons } from '@/assets/js/icons.js';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'w-5 h-5'
  },
  className: {
    type: String,
    default: ''
  }
});

const getIcon = (name) => {
  return icons[name] || icons.commandLine;
};
</script>
