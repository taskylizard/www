<script setup lang="ts">
type AlertType = 'info' | 'tip' | 'warning' | 'danger' | 'details'

interface Alert {
  title?: string
  type: AlertType
}

const styles = {
  info: {
    base: 'border-blue-7 bg-blue-3 text-blue-12 dark:border-blue-dark-7 dark:bg-blue-dark-3 dark:text-blue-dark-12',
    title: 'text-blue-11 dark:text-blue-dark-11'
  },
  tip: {
    base: 'border-green-7 bg-green-3 text-green-12 dark:border-green-dark-7 dark:bg-green-dark-3 dark:text-green-dark-12',
    title: 'text-green-11 dark:text-green-dark-11'
  },
  warning: {
    base: 'border-yellow-7 bg-yellow-3 text-yellow-12 dark:border-yellow-dark-7 dark:bg-yellow-dark-3 dark:text-yellow-dark-12',
    title: 'text-yellow-11 dark:text-yellow-dark-11'
  },
  danger: {
    base: 'border-red-7 bg-red-3 text-red-12 dark:border-red-dark-7 dark:bg-red-dark-3 dark:text-red-dark-12',
    title: 'text-red-11 dark:text-red-dark-11'
  },
  details: {
    base: 'border-gray-7 bg-gray-3 text-gray-12 dark:border-gray-dark-7 dark:bg-gray-dark-3 dark:text-gray-dark-12',
    title: 'text-gray-11 dark:text-gray-dark-11'
  }
} as const

const props = defineProps<Alert>()

const computedTitle = computed(() =>
  props.title ?? (props.type === 'details' ? 'Details' : props.type.toUpperCase())
)

const elementType = computed(() => props.type === 'details' ? 'details' : 'div')

const blockClasses = computed(() => [
  'not-prose',
  'custom-block',
  styles[props.type].base
])

const titleClasses = computed(() => [
  'custom-block-title',
  styles[props.type].title
])
</script>

<template>
  <component :is="elementType" :class="blockClasses">
    <template v-if="type === 'details'">
      <summary :class="titleClasses">
        {{ computedTitle }}
      </summary>
      <p>
        <slot />
      </p>
    </template>
    <template v-else>
      <p :class="titleClasses">
        {{ computedTitle }}
      </p>
      <p>
        <slot />
      </p>
    </template>
  </component>
</template>

<style scoped lang="scss">
.custom-block {
  @apply my-6 rounded-lg border p-4 text-sm;

  &-title {
    @apply pb-2 font-semibold tracking-wide last:pb-0;
  }

  &:not(.details)>p {
    @apply m-0;
  }

  &.details {
    summary {
      @apply cursor-pointer;

      ~* {
        @apply my-4;
      }

      ~*:last-child {
        @apply mb-0;
      }
    }
  }
}
</style>
