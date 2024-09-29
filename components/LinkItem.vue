<script setup lang="ts">
const props = defineProps<{
  text: string
  date?: string
  to: string
}>()

const date = computed(() => props.date ? new Date(props.date).toLocaleDateString('en-gb') + ' —' : undefined)
</script>

<template>
  {{ date }}
  <NuxtLink :to
            class="rounded bg-neutral-3 px-1 py-0.5 no-underline transition-colors duration-300 hover:bg-pink-8 dark:bg-neutral-dark-3 dark:hover:bg-pink-dark-8"
  >
    {{ text }}
  </NuxtLink>
</template>
