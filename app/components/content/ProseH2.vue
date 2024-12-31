<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(
  () =>
    props.id
    && ((typeof headings?.anchorLinks === 'boolean'
      && headings?.anchorLinks === true)
    || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2))
)
</script>

<template>
  <h2
    :id="props.id"
    tabindex="-1"
  >
    <slot />
    <a
      v-if="props.id && generate"
      class="header-anchor"
      :href="`#${props.id}`"
    >
      <Icon
        name="radix-icons:link-2"
        class="ml-1 size-5"
      />
    </a>
    <slot v-else />
  </h2>
</template>
