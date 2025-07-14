<script setup lang="ts">
const colorMode = useColorMode()
const route = useRoute()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const pageText = computed(() => {
  const path = route.path
  if (path === '/') return undefined
  if (path.startsWith('/posts')) return 'Posts'
  if (path.startsWith('/art')) return 'Art'
  return undefined
})

const themeButtonClasses = [
  'size-8 inline-flex items-center justify-center',
  'border border-neutral-7 rounded-lg bg-neutral-3 text-neutral-11',
  'outline-none transition-colors',
  'hover:bg-neutral-4 active:bg-neutral-5',
  'focus-visible:ring-2 focus-visible:ring-offset-2',
  'focus-visible:ring-neutral-8 focus-visible:ring-offset-neutral-1',
  'disabled:pointer-events-none disabled:opacity-90'
].join(' ')
</script>

<template>
  <header class="relative top-0 z-20 md:sticky">
    <nav class="mx-auto max-w-[700px] flex items-center justify-between gap-3 px-4 py-3 md:px-6">
      <NuxtLink to="/" class="mt-2 text-xl font-semibold">
        🌷
        <template v-if="pageText">
          <span class="text-neutral-6 font-semibold"> / </span>
          <span class="text-neutral-11">{{ pageText }}</span>
        </template>
      </NuxtLink>

      <Primitive as="button" :class="themeButtonClasses" @click="toggleTheme">
        <Icon name="ph-sun-duotone" class="rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90" size="16" />
        <Icon name="ph-moon-duotone" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          size="16" />
        <span class="sr-only">Toggle theme</span>
      </Primitive>
    </nav>
  </header>
</template>
