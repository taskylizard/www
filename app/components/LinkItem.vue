<script setup lang="ts">
type BaseProps = {
  title: string
  to: string
  description?: string
}

type Project = BaseProps & {
  type: 'project'
}

type Post = BaseProps & {
  type: 'post'
  date: string
}

type Props = Project | Post
const props = defineProps<Props>()
</script>

<template>
  <template v-if="props.type === 'post'">
    <NuxtTime class="text-neutral-11 dark:text-neutral-dark-11" :datetime="props.date" />
    <span class="text-neutral-6 dark:text-neutral-dark-6"> – </span>
  </template>

  <NuxtLink
    :to
    class="rounded bg-neutral-3 px-1 py-0.5 no-underline transition-colors duration-300 hover:bg-pink-4 hover:text-pink-11 dark:bg-neutral-dark-3 dark:hover:bg-pink-dark-4 dark:hover:text-pink-dark-11"
  >
    {{ props.title }}
  </NuxtLink>

  <template v-if="props.type === 'project' && props.description">
    <span class="text-neutral-6 dark:text-neutral-dark-6"> — </span>
    <span>{{ props.description }}</span>
  </template>
</template>
