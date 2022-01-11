<template>
  <div class="flex flex-col items-center mx-auto w-full max-w-lg h-full">
    <!-- Grid container -->
    <div class="flex flex-1 justify-center">
      <!-- Grid -->
      <div
        class="aspect-[5/6] grid grid-cols-5 grid-rows-6 gap-1 m-4 md:max-h-[50vh]">
        <template v-for="y in [0, 1, 2, 3, 4, 5]">
          <LetterBox
            v-for="x in [0, 1, 2, 3, 4]"
            class="aspect-square text-2xl font-bold uppercase border-2"
            :class="{
              'bg-green-500 text-black':
                guesses[y].confirmed &&
                letterValidity(getLetter(y, x), x) === LetterPosition.Perfect,
              'bg-yellow-500 text-black':
                guesses[y].confirmed &&
                letterValidity(getLetter(y, x), x) === LetterPosition.Misplaced,
            }">
            <span v-html="getLetter(y, x)" />
          </LetterBox>
        </template>
      </div>
    </div>

    <!-- Keyboard -->
    <VisualKeyboard
      class="grow-0 shrink-0 px-1 m-2 mb-3 w-full h-48 sm:mb-8"
      @input="letter => insertLetter(letter)"
      @enter="checkCurrentWord"
      @delete="removeLastLetter"
      :greyed-out="invalidLetters" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LetterBox from '@/components/LetterBox.vue'
import { doesWordExist, getWordForToday } from '@/composables/words-list'
import { WordInput } from '@/types'
import VisualKeyboard from '@/components/VisualKeyboard.vue'
import { showToast } from '@/composables/toast-manager'
import {
  getConfirmedWords as getsavedWords,
  saveConfirmedWords,
} from '@/composables/storage'

const wordToFind = getWordForToday()

enum LetterPosition {
  Invalid = 0,
  Perfect,
  Misplaced,
}

const guesses = ref<WordInput[]>([
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
])

const currentGuess = computed(() => guesses.value.find(o => !o.confirmed))

const currentRowIndex = computed(() =>
  currentGuess.value ? guesses.value.indexOf(currentGuess.value) : -1,
)
const currentColumnIndex = computed(() => currentGuess.value?.word.length ?? -1)

/**
 * List of letters not in the word
 */
const invalidLetters = ref<Set<string>>(new Set())

const savedWords = getsavedWords()

/**
 * Load saved words at startup
 */
for (let i = 0; i < savedWords.length; ++i) {
  guesses.value[i].word = savedWords[i]
  checkCurrentWord()
}

function insertLetter(letter: string): void {
  if (!currentGuess.value) return
  if (currentGuess.value.word.length === 5) {
    return
  }
  currentGuess.value.word += letter
}

function removeLastLetter(): void {
  if (!currentGuess.value) return
  currentGuess.value.word = currentGuess.value.word.substring(
    0,
    currentGuess.value.word.length - 1,
  )
}

function checkCurrentWord(): void {
  if (!currentGuess.value) return
  const word = currentGuess.value.word

  // Check if the word exists
  if (!doesWordExist(word)) {
    showToast(
      "Ce mot n'existe pas dans notre liste.<br>Veuillez essayer un autre mot.",
      5000,
    )
    return
  }

  currentGuess.value.confirmed = true
  saveConfirmedWords(guesses.value.map(o => o.word))

  // Save incorrect letters to darken them
  for (let i = 0; i < word.length; ++i) {
    if (letterValidity(word[i], i) === LetterPosition.Invalid) {
      invalidLetters.value.add(word[i])
    }
  }
}

function getLetter(wordIndex: number, letterIndex: number): string {
  const letter = guesses.value[wordIndex]?.word[letterIndex]
  if (letter) return letter
  if (
    wordIndex === currentRowIndex.value &&
    letterIndex === currentColumnIndex.value
  ) {
    return '_'
  }
  return '&nbsp;'
}

function letterValidity(letter: string, index: number): LetterPosition {
  if (wordToFind[index] === letter) {
    return LetterPosition.Perfect
  }
  if (wordToFind.includes(letter)) {
    return LetterPosition.Misplaced
  }
  return LetterPosition.Invalid
}
</script>
