<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const settings = ref({
  enabled: true,
  count: 100,
  speed: 1,
  height: 70 // Значение по умолчанию (70%)
})

onMounted(() => {
  const saved = localStorage.getItem('snow-settings')
  if (saved) {
    // Мержим сохраненные настройки с дефолтными (на случай, если height еще не был сохранен)
    settings.value = { ...settings.value, ...JSON.parse(saved) }
    emit('update:modelValue', settings.value)
  }
})

watch(settings, (newVal) => {
  localStorage.setItem('snow-settings', JSON.stringify(newVal))
  emit('update:modelValue', newVal)
}, { deep: true })

const toggleOpen = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="snow-controls-wrapper">
    <!-- Кнопка открытия -->
    <button
        class="gear-btn"
        :class="{ active: isOpen }"
        @click="toggleOpen"
        title="Настройки снега"
    >
      ❄️
    </button>

    <!-- Панель настроек -->
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

/* Кнопка-шестеренка */
.gear-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Активное состояние и ховер кнопки - используем бренд цвет */
.gear-btn:hover, .gear-btn.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 0 8px rgba(15, 200, 0, 0.3); /* Легкое свечение */
}

/* Панель */
.settings-panel {
  position: absolute;
  bottom: 55px;
  right: 0;
  width: 240px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
}

/* Заголовок */
.row.header {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 10px;
  margin-bottom: 14px;
}

.title {
  font-weight: 600;
  color: var(--vp-c-brand-1); /* Заголовок бренд цветом */
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}
.close-btn:hover {
  color: var(--vp-c-brand-1);
}

/* Строки настроек */
.row {
  margin-bottom: 14px;
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
  margin-bottom: 6px;
  font-size: 13px;
}

label {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.label-box span {
  color: var(--vp-c-brand-1);
  font-family: monospace;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  filter: grayscale(1);
}

/* Стилизация инпутов с использованием бренд цвета */
input[type="range"] {
  width: 100%;
  accent-color: var(--vp-c-brand-1); /* Современный способ покрасить ползунок */
  cursor: pointer;
}

input[type="checkbox"] {
  accent-color: var(--vp-c-brand-1);
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>