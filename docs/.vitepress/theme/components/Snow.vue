<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 100 // Количество снежинок
  },
  speed: {
    type: Number,
    default: 1 // Множитель скорости
  }
})

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
let particles = []
let w = 0
let h = 0

const resize = () => {
  if (!canvasRef.value) return
  w = canvasRef.value.width = window.innerWidth
  h = canvasRef.value.height = window.innerHeight
}

const createParticles = () => {
  particles = []
  for (let i = 0; i < props.count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 1, // Радиус от 1 до 5px
      d: Math.random() * props.count, // Плотность
      s: (Math.random() * 1 + 0.5) * props.speed // Скорость падения
    })
  }
}

const draw = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, w, h)
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
    p.y += p.s
    p.x += Math.sin(p.d) * 0.5 // Легкое покачивание

    // Если снежинка ушла вниз, возвращаем наверх
    if (p.y > h) {
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
  height: 100%;
  pointer-events: none; /* Чтобы клики проходили сквозь снег */
  z-index: 9999; /* Поверх всего */
}
</style>