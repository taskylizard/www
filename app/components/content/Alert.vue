<script setup lang="ts">
type AlertType = 'info' | 'tip' | 'warning' | 'danger' | 'details'

interface Alert {
  title?: string
  type: AlertType
}

// @unocss-include
const styles = {
  info: {
    base: 'border-info-7 bg-info-3 text-info-12',
    title: 'text-info-11'
  },
  tip: {
    base: 'border-tip-7 bg-tip-3 text-tip-12',
    title: 'text-tip-11'
  },
  warning: {
    base: 'border-warning-7 bg-warning-3 text-warning-12',
    title: 'text-warning-11'
  },
  danger: {
    base: 'border-danger-7 bg-danger-3 text-danger-12',
    title: 'text-danger-11'
  },
  details: {
    base: 'border-details-7 bg-details-3 text-details-12',
    title: 'text-gray-11'
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
