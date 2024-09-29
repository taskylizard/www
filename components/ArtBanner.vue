<script setup lang="ts">
defineProps<{
  title: string
  description: string
  src: string
  alt: string
}>()
</script>

<template>
  <div class="max-w-sm">
    <img :src
         :alt
         class="mb-4 h-auto w-full rounded-lg"
    >
    <h4 class="mb-2 text-xl font-bold">
      {{ title }}
    </h4>
    <p class="italic text-neutral-8">
      {{ description }}
    </p>
  </div>
</template>
