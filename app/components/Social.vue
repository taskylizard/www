<script setup lang="ts">
defineProps<{
  to: string
  icon: string
}>()
</script>

<template>
  <NuxtLink
    :to
    class="outline-hidden inline-flex size-10 cursor-pointer appearance-none items-center justify-center rounded-[0.625rem] border border-neutral-6 bg-neutral-3 p-0 text-neutral-11 hover:bg-neutral-4 focus-visible:outline-1 focus-visible:outline-neutral-9 active:border-neutral-7 active:bg-neutral-5"
  >
    <Icon :name="icon" size="20" />
  </NuxtLink>
</template>
