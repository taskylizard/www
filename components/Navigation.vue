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
      <NuxtLink to="/"
                class="mt-2 text-xl font-semibold"
      >
        🌷 <span v-if="pageText"
                 class="text-pink-11 dark:text-pink-dark-11"
        >/ {{ pageText }}</span>
      </NuxtLink>

      <div class="flex size-8 items-center justify-center">
        <Primitive as="button"
                   class="datk:text-neutral-11 inline-flex size-8 items-center justify-center gap-2 rounded-lg border border-neutral-6 bg-neutral-3 text-base font-medium text-neutral-dark-11 outline-none hover:bg-neutral-4 focus-visible:ring-2 focus-visible:ring-neutral-8 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-1 active:bg-neutral-5 disabled:pointer-events-none disabled:border-neutral-5 disabled:bg-neutral-4 disabled:text-neutral-dark-8
        disabled:opacity-90 dark:border-neutral-dark-6 dark:bg-neutral-dark-3 dark:hover:bg-neutral-dark-4 dark:focus-visible:ring-neutral-dark-6 dark:focus-visible:ring-offset-neutral-dark-1 dark:active:bg-neutral-dark-5 dark:disabled:border-neutral-dark-5 dark:disabled:bg-neutral-dark-4 dark:disabled:text-neutral-8"
                   @click="toggleDark"
        >
          <Icon name="radix-icons:sun"
                class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                size="16"
          />
          <Icon name="radix-icons:moon"
                class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                size="16"
          />
          <span class="sr-only">Toggle theme</span>
        </Primitive>
      </div>
    </nav>
  </header>
</template>
