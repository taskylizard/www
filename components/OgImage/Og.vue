<script setup lang="ts">
/**
 * @credits Nuxt SEO <https://nuxtseo.com/>
 */
defineProps<{
  title?: string
  description?: string
  icon?: string
  theme?: string
}>()

const themeRgb = computed(() => {
  // we want to convert it so it's just `<red>, <green>, <blue>` (255, 255, 255)
  return '#ff91af'
    .replace('#', '')
    .match(/.{1,2}/g)
    ?.map(v => Number.parseInt(v, 16))
    .join(', ')
})
</script>

<template>
  <div class="relative flex size-full justify-between bg-neutral-dark-1 p-[60px] text-neutral-1">
    <div
      class="absolute -right-full top-0 flex"
      :style="{
        width: '200%',
        height: '200%',
        backgroundImage: `radial-gradient(circle, rgba(${themeRgb}, 0.5) 0%,  rgba(5, 5, 5,0.3) 50%, rgba(5, 5, 5,0) 70%)`,
      }"
    />
    <div class="relative size-full justify-between">
      <div class="flex flex-row items-start justify-between">
        <div class="flex w-full max-w-[65%] flex-col">
          <h1 class="m-0 mb-[30px] text-[75px] font-bold">
            {{ title }}
          </h1>
          <p v-if="description"
             class="text-[35px] text-neutral-8"
          >
            {{ description }}
          </p>
        </div>
        <div v-if="icon"
             style="width: 30%"
             class="flex justify-end"
        >
          <Icon
            :name="icon"
            size="250px"
            style="margin: 0 auto; opacity: 0.7"
          />
        </div>
      </div>
    </div>
  </div>
</template>
