<script setup lang="ts">
import { computed, ref } from 'vue'
import QuestionCard from './components/QuestionCard.vue'
import ResultsScreen from './components/ResultsScreen.vue'
import { questions } from './data/questions'

const currentIndex = ref(0)
const answers = ref<(number | null)[]>(Array(questions.length).fill(null))
const isFinished = ref(false)

const currentQuestion = computed(() => questions[currentIndex.value])
const answeredCount = computed(() => answers.value.filter((answer) => answer !== null).length)
const progress = computed(() => (answeredCount.value / questions.length) * 100)
const isLastQuestion = computed(() => currentIndex.value === questions.length - 1)
const hasAnswer = computed(() => answers.value[currentIndex.value] !== null)
const score = computed(() => {
  return answers.value.reduce<number>((total, answer, index) => {
    return total + (answer === questions[index].correctIndex ? 1 : 0)
  }, 0)
})

function selectAnswer(index: number) {
  answers.value[currentIndex.value] = index
}

function nextQuestion() {
  if (!hasAnswer.value) return

  if (isLastQuestion.value) {
    isFinished.value = true
    return
  }

  currentIndex.value += 1
}

function previousQuestion() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

function restart() {
  currentIndex.value = 0
  answers.value = Array(questions.length).fill(null)
  isFinished.value = false
}
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <a class="brand" href="#" @click.prevent="restart">
        <span class="brand-mark">Q</span>
        <span>Мозковий<br /><b>штурм</b></span>
      </a>
      <div class="lab-chip">Лабораторна робота №1</div>
      <div class="variant">Варіант <strong>1</strong></div>
    </header>

    <main class="main-content">
      <template v-if="!isFinished">
        <div class="intro-row">
          <div>
            <p class="eyebrow">Онлайн-тест</p>
            <h1>Перевірка знань</h1>
          </div>
          <div class="progress-summary">
            <strong>{{ answeredCount }}<span>/{{ questions.length }}</span></strong>
            <small>питань<br />пройдено</small>
          </div>
        </div>

        <div class="progress-track" aria-label="Прогрес проходження">
          <span :style="{ width: `${progress}%` }" />
        </div>

        <div class="question-layout">
          <div class="question-index">
            <span>{{ String(currentIndex + 1).padStart(2, '0') }}</span>
            <i />
            <small>{{ String(questions.length).padStart(2, '0') }}</small>
          </div>
          <QuestionCard
            :question="currentQuestion"
            :selected="answers[currentIndex]"
            :question-number="currentIndex + 1"
            @select="selectAnswer"
          />
        </div>

        <div class="controls">
          <button class="back-button" :disabled="currentIndex === 0" @click="previousQuestion">
            ← Назад
          </button>
          <button class="primary-button" :disabled="!hasAnswer" @click="nextQuestion">
            {{ isLastQuestion ? 'Показати результат' : 'Наступне питання' }}
            <span>→</span>
          </button>
        </div>
      </template>

      <ResultsScreen v-else :score="score" :total="questions.length" @restart="restart" />
    </main>
  </div>
</template>
