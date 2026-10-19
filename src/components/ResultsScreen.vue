<script setup lang="ts">
defineProps<{
  score: number
  total: number
}>()

const emit = defineEmits<{
  (event: 'restart'): void
}>()
</script>

<template>
  <section class="results-card">
    <p class="eyebrow">Результат</p>
    <h1>Тест завершено</h1>
    <p class="result-copy">Ви відповіли на всі питання.</p>
    <div class="score-panel">
      <strong>{{ score }} <small>із {{ total }}</small></strong>
      <span>правильних відповідей</span>
    </div>
    <div class="result-bar"><span :style="{ width: `${(score / total) * 100}%` }" /></div>
    <button class="primary-button" @click="emit('restart')">Пройти ще раз <span>↗</span></button>
  </section>
</template>
