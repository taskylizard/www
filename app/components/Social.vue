<script setup lang="ts">
const props = defineProps<{ to: string, icon: string, label: string, accent: 'sky' | 'crimson' | 'olive' }>()

const accentClasses = {
  sky: 'hover:text-sky-11 dark:hover:text-sky-dark-11 hover:border-sky-11 dark:hover:border-sky-dark-11',
  crimson: 'hover:text-crimson-11 dark:hover:text-crimson-dark-11 hover:border-crimson-11 dark:hover:border-crimson-dark-11',
  olive: 'hover:text-olive-11 dark:hover:text-olive-dark-11 hover:border-olive-11 dark:hover:border-olive-dark-11'
}

const accentClass = computed(() => accentClasses[props.accent] || '')
</script>

<template>
  <NuxtLink
    :to
    class="
                inline-flex h-8 items-center justify-center gap-2 rounded-xl border bg-neutral-3 px-3 text-base font-medium text-neutral-dark-11 outline-none transition-colors duration-300 hover:bg-neutral-4 focus-visible:ring-2 focus-visible:ring-neutral-8 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-1 active:bg-neutral-5 dark:bg-neutral-dark-3 dark:text-neutral-11 dark:hover:bg-neutral-dark-4 dark:focus-visible:ring-neutral-8 dark:focus-visible:ring-offset-neutral-dark-1 dark:active:bg-neutral-dark-4"
    :class="accentClass"
  >
    <Icon :name="icon" />
    {{ label }}
  </NuxtLink>
</template>
