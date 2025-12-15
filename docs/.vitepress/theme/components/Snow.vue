<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  count: { type: Number, default: 100 },
  speed: { type: Number, default: 1 },
  enabled: { type: Boolean, default: true }
})

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
let particles = []
let w = 0
let h = 0

// Изменение размера канваса
const resize = () => {
  if (!canvasRef.value) return
  w = canvasRef.value.width = window.innerWidth
  h = canvasRef.value.height = window.innerHeight
}

// Создание частиц
const createParticles = () => {
  particles = []
  // Если выключено - не создаем частицы
  if (!props.enabled) return

  for (let i = 0; i < props.count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      d: Math.random() * props.count,
      s: (Math.random() * 1 + 0.5)
    })
  }
}

// Пересоздаем частицы, если изменилось их количество или вкл/выкл
watch(() => [props.count, props.enabled], () => {
  createParticles()
})

const draw = () => {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, w, h)

  if (!props.enabled) {
    // Если выключено, но анимация запущена — просто чистим экран и ждем
    animationFrameId = requestAnimationFrame(draw)
    return
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
  ctx.beginPath()

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    ctx.moveTo(p.x, p.y)
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
  }
  ctx.fill()
  update()
  animationFrameId = requestAnimationFrame(draw)
}

const update = () => {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    // Используем props.speed как множитель
    p.y += p.s * props.speed
    p.x += Math.sin(p.d) * 0.5

    // Если снежинка ушла вниз, возвращаем наверх
    // h + 10 гарантирует, что она уйдет за пределы экрана перед сбросом
    if (p.y > h + 10) {
      particles[i] = {
        x: Math.random() * w,
        y: -10,
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
    createParticles()
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
  <canvas ref="canvasRef" class="snow-canvas"></canvas>
</template>

<style scoped>
.snow-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Канвас на весь экран, но... */
  pointer-events: none;
  z-index: 9999;

  /* ...магия CSS для эффекта "только сверху" */
  /* Снег виден на 100% сверху, начинает исчезать на 40% высоты и полностью исчезает к 70% */
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 70%);
  mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 70%);
}
</style>