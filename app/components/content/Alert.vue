<script setup lang="ts">
const props = defineProps<{
  title?: string
  type: 'info' | 'tip' | 'warning' | 'danger' | 'details'
}>()

const computedTitle = computed(
  () =>
    props.title
    ?? (props.type === 'details' ? 'Details' : props.type.toUpperCase())
)
const is = computed(() => (props.type === 'details' ? 'details' : 'div'))
</script>

<template>
  <component
    :is
    :class="`${type} custom-block`"
  >
    <template v-if="type === 'details'">
      <summary>
        {{ computedTitle }}
      </summary>
      <slot />
    </template>
    <template v-else>
      <p class="custom-block-title">
        {{ computedTitle }}
      </p>
      <slot />
    </template>
  </component>
</template>

<style lang="scss" scoped>
.custom-block {
  @apply my-6 rounded-lg border p-4 text-sm;

  &-title {
    @apply pb-2 font-semibold tracking-wide last:pb-0;

    code {
      color: inherit;
    }
  }

  &:not(.details) > p {
    @apply m-0;
  }

  &.info {
    @apply border-blue-7 bg-blue-1 dark:border-blue-dark-7 dark:bg-blue-dark-1;

    .custom-block-title {
      @apply text-blue-11 dark:text-blue-dark-11;
    }
  }

  &.tip {
    @apply border-green-7 bg-green-1 dark:border-green-dark-7 dark:bg-green-dark-1;

    .custom-block-title {
      @apply text-green-11 dark:text-green-dark-11;
    }
  }

  &.warning {
    @apply border-yellow-7 bg-yellow-1 dark:border-yellow-dark-7 dark:bg-yellow-dark-1;

    .custom-block-title {
      @apply text-yellow-11 dark:text-yellow-dark-11;
    }
  }

  &.danger {
    @apply border-red-7 bg-red-1 dark:border-red-dark-7 dark:bg-red-dark-1;

    .custom-block-title {
      @apply text-red-11 dark:text-red-dark-11;
    }
  }

  &.details {
    @apply border-gray-7 bg-gray-1 dark:border-gray-dark-7 dark:bg-gray-dark-1;

    summary {
      @apply cursor-pointer font-semibold tracking-wide text-gray-11 dark:text-gray-dark-11;

      ~ * {
        @apply my-[1.25em];
      }

      ~ *:last-child {
        @apply mb-0;
      }
    }
  }
}
</style>
