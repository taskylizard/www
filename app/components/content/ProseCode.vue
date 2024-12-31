<script setup lang="ts">
import type { BuiltinLanguage } from 'shiki'

const {
  code = '',
  language,
  filename,
  meta
} = defineProps<{
  code?: string
  language?: BuiltinLanguage
  filename?: string
  highlights?: number[]
  meta?: string
}>()

const parsedMeta = computed(() => {
  const split = meta?.split(' ') ?? []
  const params = new Map<string, string | undefined>()

  for (const param of split) {
    const [key, val] = param.split('=')
    params.set(key, val)
  }

  return params
})

const iconMap = new Map(Object.entries(useAppConfig().app.codeIcon))
const icon = computed(() => {
  const filenameLow = filename?.toLowerCase()
  return parsedMeta.value.get('icon') || (filenameLow && iconMap.get(filenameLow)) || (language && iconMap.get(language))
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg border border-neutral-6 bg-neutral-2 text-neutral-12 shadow-sm dark:border-neutral-dark-6 dark:bg-neutral-dark-2 dark:text-neutral-dark-12 [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5"
  >
    <div
      v-if="filename"
      class="flex items-center border-b border-b-neutral-6 p-3 font-mono text-sm dark:border-b-neutral-dark-6"
    >
      <SmartIcon v-if="icon" :name="icon" class="mr-1.5" />
      <span>{{ filename }}</span>
      <CodeCopy :code class="ml-auto mr-1" />
    </div>
    <span v-else class="absolute right-3 top-3 z-10">
      <CodeCopy :code />
    </span>
    <slot />
  </div>
</template>
