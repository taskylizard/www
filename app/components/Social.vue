<script setup lang="ts">
const props = defineProps<{
  to: string
  icon: string
  label: string
  accent: 'sky' | 'crimson' | 'olive' | 'indigo' | 'slate'
}>()

const accentClasses = {
  sky: 'hover:bg-sky-4 dark:hover:bg-sky-dark-4 active:bg-sky-5 dark:active:bg-sky-dark-5 text-sky-11 dark:text-sky-dark-11 border-sky-7 dark:border-sky-dark-7',
  crimson: 'hover:bg-crimson-4 dark:hover:bg-crimson-dark-4 active:bg-crimson-5 dark:active:bg-crimson-dark-5 text-crimson-11 dark:text-crimson-dark-11 border-crimson-7 dark:border-crimson-dark-7',
  olive: 'hover:bg-olive-4 dark:hover:bg-olive-dark-4 active:bg-olive-5 dark:active:bg-olive-dark-5 text-olive-11 dark:text-olive-dark-11 border-olive-7 dark:border-olive-dark-7',
  indigo: 'hover:bg-indigo-4 dark:hover:bg-indigo-dark-4 active:bg-indigo-5 dark:active:bg-indigo-dark-5 text-indigo-11 dark:text-indigo-dark-11 border-indigo-7 dark:border-indigo-dark-7',
  slate: 'hover:bg-slate-4 dark:hover:bg-slate-dark-4 active:bg-slate-5 dark:active:bg-slate-dark-5 text-slate-11 dark:text-slate-dark-11 border-slate-7 dark:border-slate-dark-7'
}

const accentClass = computed(() => accentClasses[props.accent] || '')
</script>

<template>
  <NuxtLink
    :to
    class="inline-flex h-8 items-center justify-center gap-2 rounded-xl border px-3 text-base font-medium outline-none transition-colors duration-300"
    :class="[
      // Base styles using neutral scale
      'bg-neutral-3 dark:bg-neutral-dark-3',
      // Hover states
      'hover:bg-neutral-4 dark:hover:bg-neutral-dark-4',
      // Active states
      'active:bg-neutral-5 dark:active:bg-neutral-dark-5',
      // Focus states
      'focus-visible:ring-2 focus-visible:ring-neutral-8 dark:focus-visible:ring-neutral-dark-8',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-1 dark:focus-visible:ring-offset-neutral-dark-1',
      // Accent colors
      accentClass
    ]"
  >
    <Icon :name="icon" />
    {{ label }}
  </NuxtLink>
</template>
