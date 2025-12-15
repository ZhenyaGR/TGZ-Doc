<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

// Локальное состояние, которое синхронизируется с родителем через v-model
const settings = ref({
  enabled: true,
  count: 100,
  speed: 1
})

// При монтировании пробуем загрузить из localStorage
onMounted(() => {
  const saved = localStorage.getItem('snow-settings')
  if (saved) {
    settings.value = JSON.parse(saved)
    emit('update:modelValue', settings.value)
  }
})

// Следим за изменениями и сохраняем/отправляем наверх
watch(settings, (newVal) => {
  localStorage.setItem('snow-settings', JSON.stringify(newVal))
  emit('update:modelValue', newVal)
}, { deep: true })

const toggleOpen = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="snow-controls-wrapper">
    <!-- Кнопка открытия -->
    <button class="gear-btn" @click="toggleOpen" title="Настройки снега">
      ❄️
    </button>

    <!-- Панель настроек -->
    <div v-if="isOpen" class="settings-panel">
      <div class="row header">
        <span>Snow Config</span>
        <button class="close-btn" @click="isOpen = false">×</button>
      </div>

      <div class="row">
        <label>Включить</label>
        <input type="checkbox" v-model="settings.enabled">
      </div>

      <div class="row" :class="{ disabled: !settings.enabled }">
        <label>Кол-во: {{ settings.count }}</label>
        <input type="range" min="10" max="500" step="10" v-model.number="settings.count">
      </div>

      <div class="row" :class="{ disabled: !settings.enabled }">
        <label>Скорость: {{ settings.speed }}x</label>
        <input type="range" min="0.1" max="5" step="0.1" v-model.number="settings.speed">
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
  font-family: sans-serif;
}

.gear-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s;
}
.gear-btn:hover {
  transform: rotate(45deg);
  background: var(--vp-c-bg-mute);
}

.settings-panel {
  position: absolute;
  bottom: 50px;
  right: 0;
  width: 220px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.row {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}
.row.header {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 8px;
  margin-bottom: 12px;
}
.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--vp-c-text-2);
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

label {
  font-size: 13px;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
}

input[type="range"] {
  width: 100%;
}
</style>