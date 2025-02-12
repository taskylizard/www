<script setup lang="ts">
defineProps<{
  to: string
  icon: string
}>()
</script>

<template>
  <NuxtLink
    :to
    class="size-10 inline-flex cursor-pointer appearance-none items-center justify-center border border-neutral-6 rounded-[0.625rem] bg-neutral-3 p-0 text-neutral-11 outline-hidden active:border-neutral-7 active:bg-neutral-5 hover:bg-neutral-4 focus-visible:outline-1 focus-visible:outline-neutral-9"
  >
    <Icon
      :name="icon"
      size="20"
    />
  </NuxtLink>
</template>
