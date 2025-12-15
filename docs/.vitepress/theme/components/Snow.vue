<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'

const props = defineProps({
  count: { type: Number, default: 100 },
  speed: { type: Number, default: 1 },
  enabled: { type: Boolean, default: true },
  height: { type: Number, default: 100 } // Новый пропс (0 - 100%)
})

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
let particles = []
let w = 0
let h = 0

// Вычисляем стиль маски динамически
const maskStyle = computed(() => {
  // Снег будет полностью виден до (height - 30%), а к (height%) исчезнет
  const fadeEnd = props.height
  const fadeStart = Math.max(0, fadeEnd - 30)

  const gradient = `linear-gradient(to bottom, black 0%, black ${fadeStart}%, transparent ${fadeEnd}%)`

  return {
    '-webkit-mask-image': gradient,
    'mask-image': gradient
  }
})

const resize = () => {
  if (!canvasRef.value) return
  w = canvasRef.value.width = window.innerWidth
  h = canvasRef.value.height = window.innerHeight
}

const createParticles = () => {
  particles = []
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

watch(() => [props.count, props.enabled], () => {
  createParticles()
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
    p.y += p.s * props.speed
    p.x += Math.sin(p.d) * 0.5

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
  <!-- Применяем динамический стиль маски -->
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
  /* Статическая маска удалена, теперь она в :style */
}
</style>