<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const props = defineProps<{
  prev?: Omit<ParsedContent, 'body'> | null | undefined
  next?: Omit<ParsedContent, 'body'> | null | undefined
}>()

const to = computed(() => {
  if (props.prev)
    return props.prev._path
  if (props.next)
    return props.next._path

  return null
})
const icon = computed(() =>
  props.prev ? 'lucide:arrow-left' : 'lucide:arrow-right'
)
const text = computed(() => (props.prev ? 'Previous' : 'Next'))
const title = computed(() =>
  props.prev ? props.prev.title : props.next!.title
)
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="not-prose flex flex-1 items-center gap-3 relative pl-4 py-3 group"
  >
    <div class="absolute left-0 top-0 w-0.5 h-full bg-neutral-6 transition-all duration-500 group-hover:bg-neutral-8"></div>
    <Icon
      :name="icon"
      class="size-4 text-neutral-11"
    />
    <div class="flex-1">
      <div class="text-xs text-neutral-11 mb-1">{{ text }}</div>
      <div class="text-sm font-medium text-neutral-12">{{ title }}</div>
    </div>
  </NuxtLink>
</template>
