<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const iconRef = ref(null)
const wrapperRef = ref(null) // 1. Ссылка на весь блок контролов

// Переменные для управления анимацией
let animation = null
let rewindCheckInterval = null
const DURATION = 3000

const settings = ref({
  enabled: true,
  count: 150,
  speed: 2,
  height: 20
})

// 2. Функция обработки клика снаружи
const handleClickOutside = (event) => {
  // Если меню закрыто - ничего не делаем
  if (!isOpen.value) return

  // Если клик был НЕ внутри нашего компонента
  if (wrapperRef.value && !wrapperRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  const saved = localStorage.getItem('snow-settings')
  if (saved) {
    settings.value = { ...settings.value, ...JSON.parse(saved) }
    emit('update:modelValue', settings.value)
  }

  // --- WAAPI АНИМАЦИИ ---
  if (iconRef.value) {
    animation = iconRef.value.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        { duration: DURATION, iterations: Infinity, easing: 'linear' }
    )
    animation.pause()
    animation.currentTime = 0
  }

  // 3. Подписываемся на клики по всей странице
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (animation) animation.cancel()
  if (rewindCheckInterval) cancelAnimationFrame(rewindCheckInterval)

  // 4. Убираем слушатель при удалении компонента
  window.removeEventListener('click', handleClickOutside)
})

watch(settings, (newVal) => {
  localStorage.setItem('snow-settings', JSON.stringify(newVal))
  emit('update:modelValue', newVal)
}, { deep: true })

const toggleOpen = () => isOpen.value = !isOpen.value

// --- ЛОГИКА АНИМАЦИИ ---

const onMouseEnter = () => {
  if (!animation) return
  if (rewindCheckInterval) cancelAnimationFrame(rewindCheckInterval)
  if (isOpen.value) return
  animation.playbackRate = 1
  animation.play()
}

const onMouseLeave = () => {
  if (!animation || isOpen.value) return
  triggerRewind()
}

watch(isOpen, (isActive) => {
  if (!animation) return
  if (rewindCheckInterval) cancelAnimationFrame(rewindCheckInterval)

  if (isActive) {
    animation.playbackRate = 2
    animation.play()
  } else {
    triggerRewind()
  }
})

const triggerRewind = () => {
  if (!animation) return
  const currentTime = animation.currentTime || 0
  animation.currentTime = currentTime % DURATION

  animation.playbackRate = -2
  animation.play()

  const checkZero = () => {
    if (animation.currentTime <= 20 || animation.currentTime > (DURATION - 100)) {
      animation.pause()
      animation.currentTime = 0
      rewindCheckInterval = null
    } else {
      rewindCheckInterval = requestAnimationFrame(checkZero)
    }
  }

  rewindCheckInterval = requestAnimationFrame(checkZero)
}
</script>

<template>
  <!-- 5. Привязываем ref="wrapperRef" к главному контейнеру -->
  <div class="snow-controls-wrapper" ref="wrapperRef">

    <button
        class="gear-btn"
        :class="{ active: isOpen }"
        @click="toggleOpen"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        title="Настройки снега"
    >
      <span ref="iconRef" class="icon-content">❄️</span>
    </button>

    <div v-if="isOpen" class="settings-panel">
      <div class="row header">
        <span class="title">Snow Config</span>
        <button class="close-btn" @click="isOpen = false">×</button>
      </div>

      <div class="row checkbox-row">
        <label>Включить</label>
        <input type="checkbox" v-model="settings.enabled">
      </div>

      <div class="row" :class="{ disabled: !settings.enabled }">
        <div class="label-box">
          <label>Количество</label>
          <span>{{ settings.count }}</span>
        </div>
        <input type="range" min="10" max="500" step="10" v-model.number="settings.count">
      </div>

      <div class="row" :class="{ disabled: !settings.enabled }">
        <div class="label-box">
          <label>Скорость</label>
          <span>{{ settings.speed }}x</span>
        </div>
        <input type="range" min="0.1" max="5" step="0.1" v-model.number="settings.speed">
      </div>

      <div class="row" :class="{ disabled: !settings.enabled }">
        <div class="label-box">
          <label>Высота (Fade)</label>
          <span>{{ settings.height }}%</span>
        </div>
        <input type="range" min="10" max="100" step="5" v-model.number="settings.height">
      </div>
    </div>
  </div>
</template>

<style scoped>
.snow-controls-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
  font-family: var(--vp-font-family-base, sans-serif);
}

.gear-btn {
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.icon-content {
  display: block;
  line-height: 1;
}

.gear-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 6px 16px rgba(15, 200, 0, 0.25);
  transform: translateY(-2px);
}

.gear-btn.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  box-shadow: 0 0 15px rgba(15, 200, 0, 0.4);
  transform: translateY(0);
}

.settings-panel {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 240px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(10px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.row.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.title {
  font-weight: 700;
  font-size: 14px;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}
.close-btn:hover {
  color: var(--vp-c-text-1);
}

.row {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.checkbox-row {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.label-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
}

label {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.label-box span {
  color: var(--vp-c-brand-1);
  font-family: monospace;
  font-weight: bold;
}

.disabled {
  opacity: 0.4;
  pointer-events: none;
  filter: grayscale(1);
  transition: opacity 0.3s;
}

input[type="range"] {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  accent-color: var(--vp-c-brand-1);
  cursor: pointer;
}

input[type="checkbox"] {
  accent-color: var(--vp-c-brand-1);
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>