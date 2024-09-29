<template>
  <img
    id="takodachi"
    :src="takodachi"
    class="pointer-events-none absolute z-[9999] size-10 opacity-0 transition-opacity duration-500"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
  >
</template>

<script setup lang="ts">
// Thanks to @yellowsink for the original code!! <3
// https://github.com/uwu/uwu.network/blob/master/src/components/sink/Takodachi.astro
import takodachi from '~/public/takodachi.webp'

// Respect user's reduced motion preferences
const prefs = usePreferredReducedMotion()

const speed = 2
const snapThreshold = 5 // px

const position = ref({ x: 0, y: 0 })
let mousePos: Vec2D | null = null
let target: Vec2D | null = null
let offset: Vec2D = [0, 0]

const updateMousePos = (e: MouseEvent | TouchEvent) => {
  if (e instanceof MouseEvent) {
    mousePos = [e.clientX, e.clientY]
  }
  else {
    mousePos = [e.touches[0].clientX, e.touches[0].clientY]
  }
}

onMounted(() => {
  if (prefs.value === 'reduce') return

  window.addEventListener('mousemove', updateMousePos)
  window.addEventListener('touchstart', updateMousePos)

  const chaser = document.getElementById('takodachi')
  if (chaser) {
    offset = v2smul([chaser.clientWidth, chaser.clientHeight], 0.5)
    setTimeout(() => {
      chaser.classList.remove('opacity-0')
    }, 1000)
  }

  const intervalId = setInterval(() => {
    if (!mousePos) return

    const currentPos: Vec2D = [
      position.value.x + offset[0],
      position.value.y + offset[1],
    ]

    target = target ?? currentPos

    const diff = v2sub(mousePos, currentPos)

    target
      = v2mag(diff) < snapThreshold
        ? mousePos
        : v2add(target, v2smul(v2norm(diff), speed))

    const finalVec = v2sub(target, offset)

    position.value = { x: finalVec[0], y: finalVec[1] }
  }, 10)

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePos)
    window.removeEventListener('touchstart', updateMousePos)
    clearInterval(intervalId)
  })
})
</script>
