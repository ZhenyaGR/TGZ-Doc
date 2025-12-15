<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const iconRef = ref(null) // Ссылка на иконку для JS-анимации

// Переменные для управления анимацией
let animation = null
let rewindCheckInterval = null
const DURATION = 3000 // Длительность одного полного оборота (3 сек)

const settings = ref({
  enabled: true,
  count: 70,
  speed: 2,
  height: 20
})

onMounted(() => {
  const saved = localStorage.getItem('snow-settings')
  if (saved) {
    settings.value = { ...settings.value, ...JSON.parse(saved) }
    emit('update:modelValue', settings.value)
  }

  // --- ИНИЦИАЛИЗАЦИЯ WAAPI АНИМАЦИИ ---
  if (iconRef.value) {
    animation = iconRef.value.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        {
          duration: DURATION,
          iterations: Infinity, // Бесконечно
          easing: 'linear'      // Линейно (равномерно)
        }
    )
    animation.pause()     // Сразу ставим на паузу
    animation.currentTime = 0 // В начало
  }
})

onUnmounted(() => {
  if (animation) animation.cancel()
  if (rewindCheckInterval) cancelAnimationFrame(rewindCheckInterval)
})

watch(settings, (newVal) => {
  localStorage.setItem('snow-settings', JSON.stringify(newVal))
  emit('update:modelValue', newVal)
}, { deep: true })

const toggleOpen = () => isOpen.value = !isOpen.value

// --- ЛОГИКА АНИМАЦИИ ---

// 1. При наведении (если меню закрыто)
const onMouseEnter = () => {
  if (!animation) return

  // Останавливаем реверс, если он шел
  if (rewindCheckInterval) cancelAnimationFrame(rewindCheckInterval)

  // Если меню открыто, мы и так крутимся быстро, ничего не меняем
  if (isOpen.value) return

  // Запускаем медленное вращение
  animation.playbackRate = 1
  animation.play()
}

// 2. При уходе мышки (если меню закрыто)
const onMouseLeave = () => {
  if (!animation || isOpen.value) return
  triggerRewind()
}

// 3. Реакция на открытие/закрытие меню
watch(isOpen, (isActive) => {
  if (!animation) return

  if (rewindCheckInterval) cancelAnimationFrame(rewindCheckInterval)

  if (isActive) {
    // АКТИВНЫЙ РЕЖИМ: Ускоряемся (без сброса позиции!)
    animation.playbackRate = 2 // В 2 раза быстрее
    animation.play()
  } else {
    // ВЫКЛЮЧИЛИ: Запускаем реверс
    triggerRewind()
  }
})

// Функция "Отмотки назад"
const triggerRewind = () => {
  if (!animation) return

  // 1. Нормализуем время (чтобы не отматывать часами, если крутилось долго)
  // Мы берем остаток от деления на длительность, позиция визуально та же
  const currentTime = animation.currentTime || 0
  animation.currentTime = currentTime % DURATION

  // 2. Включаем обратный ход
  animation.playbackRate = -2 // Крутим назад в 2 раза быстрее чем обычно
  animation.play()

  // 3. Цикл проверки: остановиться, когда дойдем до 0
  const checkZero = () => {
    // currentTime при реверсе идет к 0.
    // Иногда оно может проскочить через 0 и стать DURATION (из-за Infinity),
    // поэтому проверяем, не стал ли он вдруг очень большим, либо меньше 10мс
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
  <div class="snow-controls-wrapper">
    <!-- Добавляем mouseenter/mouseleave и ref -->
    <button
        class="gear-btn"
        :class="{ active: isOpen }"
        @click="toggleOpen"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        title="Настройки снега"
    >
      <!-- Ссылка ref для анимации -->
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

/* ВАЖНО: Убрали CSS анимации и переходы для transform */
.icon-content {
  display: block;
  line-height: 1;
  /* transform управляется через JS (WAAPI) */
}

/* Эффекты самой кнопки (не иконки) */
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

/* Панель настроек */
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