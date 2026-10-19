import type { Question } from '../types'

export const questions: Question[] = [
  { id: 1, text: 'Яка мова використовується для опису структури вебсторінки?', options: ['CSS', 'HTML', 'SQL', 'Python'], correctIndex: 1 },
  { id: 2, text: 'Яка функція Vue робить значення реактивним?', options: ['ref()', 'watch()', 'computed()', 'Усі перелічені'], correctIndex: 0 },
  { id: 3, text: 'Що означає абревіатура API?', options: ['Application Programming Interface', 'Advanced Page Integration', 'Applied Program Index', 'Application Process Input'], correctIndex: 0 },
  { id: 4, text: 'Який метод масиву створює новий масив, відфільтровуючи елементи?', options: ['map()', 'reduce()', 'filter()', 'find()'], correctIndex: 2 },
  { id: 5, text: 'Який протокол використовується для захищеного з’єднання із сайтом?', options: ['FTP', 'HTTP', 'HTTPS', 'SSH'], correctIndex: 2 },
  { id: 6, text: 'Який HTML-тег використовують для найбільшого заголовка?', options: ['<header>', '<h6>', '<title>', '<h1>'], correctIndex: 3 },
  { id: 7, text: 'Що повертає функція computed() у Vue?', options: ['Обчислюване реактивне значення', 'Звичайний масив', 'DOM-елемент', 'Promise'], correctIndex: 0 },
  { id: 8, text: 'Як позначається однорядковий коментар у JavaScript?', options: ['<!-- -->', '//', '#', '/* */'], correctIndex: 1 },
  { id: 9, text: 'Яка CSS-властивість відповідає за колір тексту?', options: ['background', 'font-style', 'color', 'text-decoration'], correctIndex: 2 },
  { id: 10, text: 'Яка команда запускає локальний сервер Vite?', options: ['npm run dev', 'npm start vue', 'vite launch', 'npm serve'], correctIndex: 0 },
]
