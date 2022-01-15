import { WordInput } from '@/types'
import { getCurrentDate, getSessionId, initPRNG, normalizeWord } from '@/utils'
import { computed, ref } from 'vue'
import words from '@/words-list'
import acceptedGuesses from '@/guesses-list'
import addDays from 'date-fns/addDays'
import setMinutes from 'date-fns/setMinutes'
import setHours from 'date-fns/setHours'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import differenceInHours from 'date-fns/differenceInHours'
import addHours from 'date-fns/addHours'
import * as storage from '@/storage'
import { showToast } from './toast-manager'

export enum LetterPosition {
  Invalid = 0,
  Perfect,
  Misplaced,
}

export function initSessionForToday(forceClean = false): void {
  const appSessionKey = getSessionId()

  // Clean the stored state if a new word is available
  const newLexicon = storage.checkIfNewLexicon()
  const newSession = storage.cleanState(appSessionKey, forceClean || newLexicon)

  if (newSession || newLexicon) {
    showToast('Un nouveau mot à deviner a été choisi.', 5000)
  }
}

export function getWordForToday(): string {
  const prng = initPRNG()
  return words[Math.floor(prng() * words.length)]
}

export function doesWordExist(word: string): boolean {
  return (
    words.map(normalizeWord).includes(word) ||
    acceptedGuesses.map(normalizeWord).includes(word)
  )
}

/**
 * @deprecated Replace with getLettersColors
 * @param letter
 * @param index
 * @returns
 */
export function letterValidity(letter: string, index: number): LetterPosition {
  if (wordToFind[index] === letter) {
    return LetterPosition.Perfect
  }
  if (wordToFind.includes(letter)) {
    return LetterPosition.Misplaced
  }
  return LetterPosition.Invalid
}

export function getLettersColors(
  guess: string,
  word = wordToFind,
): LetterPosition[] {
  const wordLetters = word.split('')
  const guessLetters = guess.split('')
  const colors: LetterPosition[] = [0, 0, 0, 0, 0]

  // First, check green letters
  for (let i = 0; i < guessLetters.length; ++i) {
    const letter = guessLetters[i]

    if (letter === wordLetters[i]) {
      colors[i] = LetterPosition.Perfect
      // Remove checked letters to avoid showing 2 yellows for a single letter
      wordLetters[i] = '_'
      guessLetters[guessLetters.findIndex(l => l === letter)] = ''
    }
  }
  for (let i = 0; i < guessLetters.length; ++i) {
    const letter = guessLetters[i]
    if (wordLetters.includes(letter)) {
      colors[i] = LetterPosition.Misplaced
      // Remove checked letters to avoid showing 2 yellows for a single letter
      guessLetters[guessLetters.findIndex(o => o === letter)] = ''
      wordLetters[wordLetters.findIndex(o => o === letter)] = '_'
    }
  }
  return colors
}

export const wordToFindAccented = getWordForToday()
export const wordToFind = wordToFindAccented
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')

export const isWinner = computed(() =>
  guesses.value.some(o => o.confirmed && o.word === wordToFind),
)
export const isGameover = computed(
  () => isWinner.value || guesses.value.every(o => o.confirmed),
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
  return `${h}h&nbsp;${m}m`
}
