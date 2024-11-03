<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const props = defineProps<{
  prev?: Omit<ParsedContent, 'body'> | null | undefined
  next?: Omit<ParsedContent, 'body'> | null | undefined
}>()

const to = computed(() => {
  if (props.prev) return props.prev._path
  if (props.next) return props.next._path

  return null
})
const icon = computed(() =>
  props.prev ? 'lucide:arrow-left' : 'lucide:arrow-right'
)
const text = computed(() => (props.prev ? 'Previous' : 'Next'))
const title = computed(() =>
  props.prev ? props.prev.title : props.next!.title
)
const description = computed(() =>
  props.prev ? props.prev.description : props.next!.description
)
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="not-prose flex flex-1 flex-col justify-between rounded-md bg-neutral-3 p-4 transition duration-300 ease-in-out hover:bg-neutral-4 focus:outline-none focus:ring-2 focus:ring-neutral-5 dark:bg-neutral-dark-3 dark:hover:bg-neutral-dark-4 dark:focus:ring-neutral-dark-5"
  >
    <div class="mb-2 flex items-center text-sm">
      <Icon
        :name="icon"
        class="mr-1 size-4"
      />
      <span>{{ text }}</span>
    </div>
    <div>
      <h3 class="mb-1 text-lg font-semibold text-neutral-dark-4 dark:text-neutral-4">
        {{ title }}
      </h3>
      <p class="line-clamp-2 text-sm text-neutral-dark-8 dark:text-neutral-8">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
