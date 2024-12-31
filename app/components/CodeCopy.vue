<script setup lang="ts">
const props = defineProps<{
  code: string
}>()

const { copy } = useClipboard({ source: props.code })
const copied = ref(false)
const checkIconRef = ref<HTMLElement>()

async function handleClick() {
  await copy(props.code)
  copied.value = true
}

onClickOutside(checkIconRef, () => {
  copied.value = false
})
</script>

<template>
  <div class="flex">
    <Transition
      name="fade"
      mode="out-in"
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="copied === false">
        <Icon
          name="lucide:copy"
          class="block cursor-pointer self-center text-neutral-11 transition-colors duration-200 hover:text-neutral-12 active:text-neutral-11 dark:text-neutral-dark-11 dark:hover:text-neutral-dark-12 dark:active:text-neutral-dark-11"
          @click="handleClick"
        />
      </div>
      <div v-else>
        <Icon
          ref="checkIconRef"
          name="lucide:check"
          class="block cursor-pointer self-center text-neutral-11 transition-colors duration-200 hover:text-neutral-12 active:text-neutral-11 dark:text-neutral-dark-11 dark:hover:text-neutral-dark-12 dark:active:text-neutral-dark-11"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
