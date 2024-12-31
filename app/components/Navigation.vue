<script setup lang="ts">
const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
const page = useRoute()
const pageText = computed(() => {
  if (page.path === '/') return undefined
  else if (page.path.startsWith('/posts')) return 'Posts'
  else if (page.path.startsWith('/art')) return 'Art'
  else return undefined
})
</script>

<template>
  <header class="relative top-0 z-20 md:sticky">
    <nav class="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
      <NuxtLink to="/" class="mt-2 text-xl font-semibold">
        🌷 <template v-if="pageText">
          <span class="font-thin text-neutral-6 dark:text-neutral-dark-6" v-text="`/ `" />
          <span class="text-neutral-11 dark:text-neutral-dark-11" v-text="pageText" />
        </template>
      </NuxtLink>

      <div class="flex size-8 items-center justify-center">
        <Primitive
          as="button"
          class="inline-flex size-8 items-center justify-center gap-2 rounded-lg border border-neutral-7 bg-neutral-3 text-neutral-11 outline-none hover:bg-neutral-4 focus-visible:ring-2 focus-visible:ring-neutral-8 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-1 active:bg-neutral-5 disabled:pointer-events-none disabled:border-neutral-7 disabled:bg-neutral-4 disabled:text-neutral-11 disabled:opacity-90 dark:border-neutral-dark-7 dark:bg-neutral-dark-3 dark:text-neutral-dark-11 dark:hover:bg-neutral-dark-4 dark:focus-visible:ring-neutral-dark-8 dark:focus-visible:ring-offset-neutral-dark-1 dark:active:bg-neutral-dark-5 dark:disabled:border-neutral-dark-7 dark:disabled:bg-neutral-dark-4 dark:disabled:text-neutral-dark-11"
          @click="toggleDark"
        >
          <Icon
            name="radix-icons:sun"
            class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size="16"
          />
          <Icon
            name="radix-icons:moon"
            class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            size="16"
          />
          <span class="sr-only">Toggle theme</span>
        </Primitive>
      </div>
    </nav>
  </header>
</template>
