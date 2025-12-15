<script setup>
import DefaultTheme from 'vitepress/theme'
import Snow from './Snow.vue'
import SnowControls from './SnowControls.vue'
import { ref } from 'vue'

const { Layout } = DefaultTheme

// Начальные настройки (будут перезаписаны из localStorage внутри SnowControls)
const snowSettings = ref({
  enabled: true,
  count: 100,
  speed: 1
})
</script>

<template>
  <Layout>
    <!-- Ваши слоты -->
  </Layout>

  <!-- Компонент снега получает настройки -->
  <Snow
      :enabled="snowSettings.enabled"
      :count="snowSettings.count"
      :speed="snowSettings.speed"
  />

  <!-- Контролы меняют переменную snowSettings -->
  <SnowControls v-model="snowSettings" />
</template>