import { WordInput } from '@/types'
import { random } from '@/utils'
import { computed, ref } from 'vue'
import words from '../words-list'

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}

export function getWordForToday(): string {
  return words[Math.floor(random() * words.length)]
}

export function doesWordExist(word: string): boolean {
  return words.includes(word)
}

export const wordToFind = getWordForToday()
export const isGameover = computed(
  () => isWinner.value || guesses.value.every(o => o.confirmed),
)
export const isWinner = computed(() =>
  guesses.value.find(o => o.word === wordToFind),
)

export const guesses = ref<WordInput[]>([
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
])
