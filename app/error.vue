<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
    <h1 class="text-9xl font-bold">
      404
    </h1>
    <p class="text-3xl font-bold">
      Page not found
    </p>
    <p class="text-lg">
      We are sorry but this page could not be found.
    </p>
    <NuxtLink to="/" class="text-neutral-11 dark:text-neutral-dark-11">
      <span class="text-neutral-11 dark:text-neutral-dark-11">Go back home</span>
      <Icon name="radix-icons:arrow-right" class="inline-block size-4" />
    </NuxtLink>
  </div>
</template>
