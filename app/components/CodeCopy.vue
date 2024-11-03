<template>
  <span class="top-0 m-1 size-7 rounded-lg bg-neutral-5 before:bg-neutral-10 hover:bg-neutral-6 hover:before:bg-neutral-11 focus:bg-neutral-6 focus:before:bg-neutral-11 dark:bg-neutral-dark-5 dark:before:bg-neutral-dark-10 dark:hover:bg-neutral-dark-6 dark:hover:before:bg-neutral-dark-11 dark:focus:bg-neutral-dark-6 dark:focus:before:bg-neutral-dark-11">
    <Transition
      name="fade"
      mode="out-in"
    >
      <Icon
        v-if="copied === false"
        name="radix-icons:copy"
        @click="handleClick"
      />
      <Icon
        v-else
        ref="checkIconRef"
        name="radix-icons:check"
      />
    </Transition>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string
}>()

const { copy } = useClipboard({ source: props.code })
const copied = ref(false)

async function handleClick() {
  await copy(props.code)
  copied.value = true
}

const checkIconRef = ref<HTMLElement>()
onClickOutside(checkIconRef, () => {
  copied.value = false
})
</script>
