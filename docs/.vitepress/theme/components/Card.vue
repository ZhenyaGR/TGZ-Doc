<template>
  <a class="card" :href="href">
    <div class="card-content">
      <div class="title">
        <span v-if="icon" class="icon">{{ icon }}</span>
        {{ title }}
      </div>
      <p v-if="details" class="details">{{ details }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  icon: {
    type: String // Можно использовать emoji или SVG
  }
})
</script>

<style scoped>
.card {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  text-decoration: none;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-content {
  padding: 24px;
  height: 100%;
}

.title {
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.icon {
  display: inline-block;
  margin-right: 12px;
  font-size: 1.5em; /* Размер иконки */
  color: var(--vp-c-text-2);
}

.details {
  padding-top: 8px;
  line-height: 1.6;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
</style>