<script setup lang="ts">
const pronounsList = [
  'she',
  'her',
  'hers',
  'herself',

  'hereditary',
  'heretic',
  'hertz',
  'hermit',
  'hermetically sealed',
  'herb',

  'she',
  'sheaf',
  'shell',
  'sherbert',
  'sherlock',
  'shelldrake',
  'sheep herder',
  'shadow',
  'shamrock'
] as const

const punctuationMark = [
  '.',
  '.',
  '.',
  '…',
  '!',
  '.',
  '?',
  '‽'
]

const pronouns = ref<Array<typeof pronounsList[number]>>([pronounsList[0]])

const inc = () => {
  pronouns.value = [...pronouns.value, pronounsList[pronouns.value.length % pronounsList.length]]
}
</script>

<template>
  <span class="pronoun" :class="{ single: pronouns.length <= 1 }" @click="inc">
    {{ pronouns.join(' / ') }}{{ punctuationMark[pronouns.length % punctuationMark.length] }}
  </span>
</template>

<style scoped lang="scss">
.pronoun {
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;

  &.single {
    @media (prefers-reduced-motion: no-preference) {
      animation: cubic-bezier(0.43, 0.05, 0.52, 0.95) 2s pulse infinite alternate;
    }
  }
}
</style>
