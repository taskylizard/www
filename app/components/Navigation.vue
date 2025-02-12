<script setup lang="ts">
const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
const page = useRoute()
const pageText = computed(() => {
  if (page.path === '/')
    return undefined
  else if (page.path.startsWith('/posts'))
    return 'Posts'
  else if (page.path.startsWith('/art'))
    return 'Art'
  else return undefined
})
</script>

<template>
  <header class="relative top-0 z-20 md:sticky">
    <nav class="mx-auto max-w-[700px] flex items-center justify-between gap-3 px-4 py-3 md:px-6">
      <NuxtLink
        to="/"
        class="mt-2 text-xl font-semibold"
      >
        🌷 <template v-if="pageText">
          <span
            class="text-neutral-6 font-semibold"
            v-text="`/ `"
          />
          <span
            class="text-neutral-11"
            v-text="pageText"
          />
        </template>
      </NuxtLink>

      <div class="size-8 flex items-center justify-center">
        <Primitive
          as="button"
          class="size-8 inline-flex items-center justify-center gap-2 border border-neutral-7 rounded-lg bg-neutral-3 text-neutral-11 outline-none disabled:pointer-events-none disabled:border-neutral-7 active:bg-neutral-5 disabled:bg-neutral-4 hover:bg-neutral-4 disabled:text-neutral-11 disabled:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-8 focus-visible:ring-offset-neutral-1"
          @click="toggleDark"
        >
          <Icon
            name="ph-sun-duotone"
            class="rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90"
            size="16"
          />
          <Icon
            name="ph-moon-duotone"
            class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            size="16"
          />
          <span class="sr-only">Toggle theme</span>
        </Primitive>
      </div>
    </nav>
  </header>
</template>
