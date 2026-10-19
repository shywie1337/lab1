<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '../types'

const props = defineProps<{
  question: Question
  selected: number | null
  questionNumber: number
}>()

const emit = defineEmits<{
  (event: 'select', index: number): void
}>()

const selectedAnswer = computed({
  get: () => props.selected,
  set: (value: number | null) => {
    if (value !== null) emit('select', value)
  },
})
</script>

<template>
  <section class="question-card">
    <div class="question-meta">
      <span class="eyebrow">Питання {{ questionNumber }}</span>
      <span class="question-points">1 бал</span>
    </div>

    <h2>{{ question.text }}</h2>

    <div class="answers" role="radiogroup" :aria-label="`Відповіді на питання ${questionNumber}`">
      <label
        v-for="(answer, index) in question.options"
        :key="`${question.id}-${answer}`"
        class="answer-option"
        :class="{ selected: selected === index }"
      >
        <input
          type="radio"
          :name="`question-${question.id}`"
          :value="index"
          v-model="selectedAnswer"
        />
        <span class="custom-radio"><span /></span>
        <span class="answer-text">{{ answer }}</span>
        <span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span>
      </label>
    </div>
  </section>
</template>
