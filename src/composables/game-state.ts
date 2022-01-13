import { WordInput } from '@/types'
import { random } from '@/utils'
import { computed, ref } from 'vue'
import words from '../words-list'

export enum LetterPosition {
  Invalid = 0,
  Perfect,
  Misplaced,
}

export function getWordForToday(): string {
  const prng = initPRNG()
  return words[Math.floor(prng() * words.length)]
}

export function doesWordExist(word: string): boolean {
  return words.includes(word)
}

export function letterValidity(letter: string, index: number): LetterPosition {
  if (wordToFind[index] === letter) {
    return LetterPosition.Perfect
  }
  if (wordToFind.includes(letter)) {
    return LetterPosition.Misplaced
  }
  return LetterPosition.Invalid
}

export const wordToFind = getWordForToday()
export const isGameover = computed(
  () => isWinner.value || guesses.value.every(o => o.confirmed),
)
export const isWinner = computed(() =>
  guesses.value.find(o => o.word === wordToFind && o.confirmed),
)

export const guesses = ref<WordInput[]>([
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
])

/**
 * Number of tries it took to find the answer
 */
export const countTotalGuesses = computed(() => {
  return guesses.value.filter(o => !!o.word && o.confirmed).length
})
