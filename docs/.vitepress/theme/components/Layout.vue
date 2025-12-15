<script setup>
import DefaultTheme from 'vitepress/theme'
import Snow from './components/Snow.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- Здесь можно прокидывать слоты, если нужно -->
  </Layout>
  <!-- Вставляем наш компонент снега -->
  <Snow :count="150" :speed="1.5" />
</template>