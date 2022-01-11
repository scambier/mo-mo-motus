<template>
  <div class="max-w-lg mx-auto">
    <!-- Grid -->
    <div class="mx-auto max-w-xs">
      <div class="grid grid-cols-5 grid-rows-6 gap-1">
        <template v-for="y in [0, 1, 2, 3, 4, 5]">
          <LetterBox
            v-for="x in [0, 1, 2, 3, 4]"
            class="uppercase aspect-square font-bold text-2xl"
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
import { saveConfirmedWords } from '@/composables/storage'

const wordToFind = getWordForToday()

enum LetterPosition {
  Invalid,
  Perfect,
  Misplaced,
}

console.log(wordToFind)
// const wordIndex = ref(0)
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
      "Ce mot n'existe pas dans notre liste.<br>Veuillez entrer un véritable mot.",
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
