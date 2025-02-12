<script setup lang="ts">
interface BaseProps {
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
    <NuxtTime
      class="text-neutral-11"
      :datetime="props.date"
    />
    <span class="text-neutral-6"> – </span>
  </template>

  <NuxtLink
    :to
    class="rounded bg-neutral-3 px-1 py-0.5 no-underline transition-colors duration-300 hover:bg-primary-4 hover:text-primary-11"
  >
    {{ props.title }}
  </NuxtLink>

  <template v-if="props.type === 'project' && props.description">
    <span class="text-neutral-6"> — </span>
    <span>{{ props.description }}</span>
  </template>
</template>
