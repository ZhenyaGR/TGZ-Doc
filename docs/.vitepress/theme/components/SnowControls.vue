<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const settings = ref({
  enabled: true,
  count: 100,
  speed: 1,
  height: 70
})

onMounted(() => {
  const saved = localStorage.getItem('snow-settings')
  if (saved) {
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
    <!-- Кнопка с анимацией -->
    <button
        class="gear-btn"
        :class="{ active: isOpen }"
        @click="toggleOpen"
        title="Настройки снега"
    >
      <span class="icon-content">❄️</span>
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

/* --- АНИМАЦИЯ ВРАЩЕНИЯ --- */
@keyframes snow-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Кнопка-шестеренка */
.gear-btn {
  /* Стекломорфизм */
  background: rgba(var(--vp-c-bg-soft-rgb), 0.7); /* Если переменной нет, будет fallback */
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  border-radius: 50%;
  width: 44px; /* Чуть больше для удобства */
  height: 44px;
  font-size: 22px;
  cursor: pointer;

  /* Тени */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  /* Центрирование иконки */
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}

/* Вращаем не саму кнопку (чтобы тень не крутилась), а спан внутри */
.icon-content {
  display: block;
  line-height: 1;
  transition: transform 0.3s;
}

/* ХОВЕР: Запуск анимации */
.gear-btn:hover .icon-content {
  animation: snow-spin 4s linear infinite; /* Медленное красивое вращение */
}

.gear-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 6px 16px rgba(15, 200, 0, 0.25);
  transform: translateY(-2px); /* Легкое всплытие */
}

/* АКТИВНОЕ СОСТОЯНИЕ (Меню открыто) */
.gear-btn.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  box-shadow: 0 0 15px rgba(15, 200, 0, 0.4);
}

.gear-btn.active .icon-content {
  /* При открытом меню крутится быстрее */
  animation: snow-spin 2s linear infinite;
}

/* Панель настроек */
.settings-panel {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 240px;
  background: var(--vp-c-bg);

  /* Полупрозрачность панели */
  background: rgba(30, 30, 32, 0.95); /* Пример для темной темы */
  /* Лучше использовать системный цвет с прозрачностью, если возможно, но в CSS modules сложно.
     Оставим просто фон темы + блюр */
  background: var(--vp-c-bg);

  border: 1px solid var(--vp-c-divider);
  border-radius: 16px; /* Более скругленные углы */
  padding: 18px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);

  /* Анимация появления панели */
  animation: slide-up 0.2s ease-out;
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(10px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* Остальные стили (почти без изменений, но чуть аккуратнее) */
.row.header {
  flex-direction: row;
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

/* Инпуты */
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