<script setup lang="ts">
import { ref } from 'vue'

const { getAllArtworks } = useServerFunctions()
const { palette, width } = useAppConfig().canvas
const canvas = ref(Array.from({ length: width * width }, () => Math.floor(Math.random() * palette.length)))
const selectedColor = ref(0)

function draw(index: number) {
  canvas.value[index] = selectedColor.value
}

function setColor(index: number) {
  selectedColor.value = index
}

function getRGBA(colorIndex: number) {
  const color = palette[colorIndex];
  if (!color) {
    return 'rgba(0, 0, 0, 1)';
  }
  const [r, g, b, a] = color;
  return `rgba(${r}, ${g}, ${b}, ${a ?? 1 / 255})`;
}
</script>

<template>
  <div class="canvas-container">
    <div class="palette">
      <div v-for="(color, index) in palette" :key="index" class="palette-color"
        :style="{ backgroundColor: getRGBA(index) }" :class="{ 'border-3 border-primary-11': selectedColor === index }"
        @click="setColor(index)" />
    </div>
    <div class="canvas">
      <div v-for="(cell, index) in canvas" :key="index" class="canvas-cell" :style="{ backgroundColor: getRGBA(cell) }"
        @click="draw(index)" />
    </div>
  </div>
</template>

<style scoped>
.canvas-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.palette {
  display: flex;
  margin-bottom: 1rem;
}

.palette-color {
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 5px;
}

.canvas {
  display: grid;
  grid-template-columns: repeat(8, 40px);
  grid-template-rows: repeat(8, 40px);
  border: 1px solid #000;
}

.canvas-cell {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>
