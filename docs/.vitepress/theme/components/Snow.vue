<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'

const props = defineProps({
  count: { type: Number, default: 100 },
  speed: { type: Number, default: 1 },
  enabled: { type: Boolean, default: true },
  height: { type: Number, default: 100 }
})

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
let particles = [] // Массив частиц (теперь реактивно обновляется)
let w = 0
let h = 0

// Динамическая маска (без изменений)
const maskStyle = computed(() => {
  const fadeEnd = props.height
  const fadeStart = Math.max(0, fadeEnd - 30)
  const gradient = `linear-gradient(to bottom, black 0%, black ${fadeStart}%, transparent ${fadeEnd}%)`
  return { '-webkit-mask-image': gradient, 'mask-image': gradient }
})

const resize = () => {
  if (!canvasRef.value) return
  w = canvasRef.value.width = window.innerWidth
  h = canvasRef.value.height = window.innerHeight
}

// Функция создания ОДНОЙ снежинки
const createParticle = () => ({
  x: Math.random() * w,
  y: Math.random() * h, // Появляются сразу по всему экрану
  r: Math.random() * 3 + 1,
  d: Math.random() * props.count, // Для смещения по X (sin)
  s: (Math.random() * 1 + 0.5)    // Базовая скорость
})

// Умное обновление количества без сброса
const updateParticlesCount = () => {
  const currentLen = particles.length
  const targetLen = props.count

  if (targetLen > currentLen) {
    // Если нужно больше: добавляем разницу
    const diff = targetLen - currentLen
    for (let i = 0; i < diff; i++) {
      particles.push(createParticle())
    }
  } else if (targetLen < currentLen) {
    // Если нужно меньше: обрезаем массив (удаляем лишние с конца)
    particles.splice(targetLen)
  }
}

// Инициализация (полный сброс)
const initParticles = () => {
  particles = []
  if (!props.enabled) return
  for (let i = 0; i < props.count; i++) {
    particles.push(createParticle())
  }
}

// Следим за изменением количества — делаем плавное обновление
watch(() => props.count, () => {
  if (props.enabled) {
    updateParticlesCount()
  }
})

// Следим за включением/выключением — тут нужен полный сброс или создание
watch(() => props.enabled, (val) => {
  if (val) {
    // Если включили — создаем с нуля (или можно вызвать updateParticlesCount для сохранения позиций, если массив не чистили)
    if (particles.length === 0) initParticles()
  } else {
    // Если выключили — чистим массив (чтобы не грузить память)
    particles = []
  }
})

const draw = () => {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, w, h)

  if (!props.enabled) {
    animationFrameId = requestAnimationFrame(draw)
    return
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
  ctx.beginPath()

  // Рисуем
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    ctx.moveTo(p.x, p.y)
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
  }
  ctx.fill()

  // Обновляем координаты
  update()

  animationFrameId = requestAnimationFrame(draw)
}

const update = () => {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    // props.speed меняется реактивно, поэтому умножаем на него прямо здесь
    // Это дает плавное ускорение/замедление без рывков
    p.y += p.s * props.speed
    p.x += Math.sin(p.d) * 0.5

    if (p.y > h + 10) {
      particles[i] = {
        x: Math.random() * w,
        y: -10, // Возвращаем наверх
        r: p.r,
        d: p.d,
        s: p.s
      }
    }
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    ctx = canvasRef.value.getContext('2d')
    resize()
    initParticles()
    draw()
    window.addEventListener('resize', resize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<template>
  <canvas ref="canvasRef" class="snow-canvas" :style="maskStyle"></canvas>
</template>

<style scoped>
.snow-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}
</style>