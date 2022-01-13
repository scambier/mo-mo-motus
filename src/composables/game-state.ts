import { WordInput } from '@/types'
import { getCurrentDate, initPRNG } from '@/utils'
import { computed, ref } from 'vue'
import words from '@/words-list'
import addDays from 'date-fns/addDays'
import setMinutes from 'date-fns/setMinutes'
import setHours from 'date-fns/setHours'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import differenceInHours from 'date-fns/differenceInHours'
import addHours from 'date-fns/addHours'

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

export const wordToFindAccented = getWordForToday()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
export const wordToFind = wordToFindAccented
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')

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
export const countTotalGuesses = computed<number>(() => {
  return guesses.value.filter(o => !!o.word && o.confirmed).length
})

export function getTimeBeforeNextWord(): string {
  const now = getCurrentDate()
  const midDay = setHours(now, 12)
  const tomorrow = setMinutes(setHours(addDays(now, 1), 0), 0)

  const next = midDay > now ? midDay : tomorrow
  const h = differenceInHours(next, now)
  const m = differenceInMinutes(next, addHours(now, h))
  return `${h}h${m}m`
}
