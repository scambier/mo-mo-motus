<template>
  <div class="flex flex-col items-center mx-auto w-full max-w-lg h-full">
    <!-- Header -->
    <SiteHeader />

    <!-- Grid container -->
    <div class="flex flex-1 justify-center w-full">
      <!-- Grid -->
      <div
        ref="grid"
        class="aspect-[5/6] grid grid-cols-5 grid-rows-6 gap-1 m-4 max-w-full md:max-h-[50vh]">
        <template v-for="y in [0, 1, 2, 3, 4, 5]">
          <LetterBox
            v-for="x in [0, 1, 2, 3, 4]"
            class="h-[100%] text-3xl font-bold uppercase border transition duration-200"
            :class="{
              'bg-green-dimmed border-green-dimmed ':
                guesses[y].confirmed &&
                getLettersColors(guesses[y].word)[x] === LetterPosition.Perfect,
              'bg-yellow-dimmed border-yellow-dimmed ':
                guesses[y].confirmed &&
                getLettersColors(guesses[y].word)[x] ===
                LetterPosition.Misplaced,
              'bg-slate-700 border-slate-700 ':
                guesses[y].confirmed &&
                getLettersColors(guesses[y].word)[x] === LetterPosition.Invalid,
            }"
            :style="{ transitionDelay: `${(x + 1) * 200}ms` }">
            <span v-html="getLetter(y, x)" />
          </LetterBox>
        </template>
      </div>
    </div>

    <!-- Keyboard -->
    <VisualKeyboard
      class="grow-0 shrink-0 px-1 w-full h-48 md:mb-16"
      @input="letter => pressLetter(letter)"
      @enter="pressEnter"
      @backspace="pressBackspace"
      :greyed-out="invalidLetters" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'

import LetterBox from '@/components/common/LetterBox.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import VisualKeyboard from '@/components/VisualKeyboard.vue'
import {
  doesWordExist,
  getLettersColors,
  guesses,
  isGameover,
  LetterPosition,
  wordToFind,
} from '@/composables/game-state'
import { saveScore } from '@/composables/statistics'
import { showToast } from '@/composables/toast-manager'
import { loadConfirmedWords, saveConfirmedWords } from '@/storage'

const grid = ref<HTMLDivElement | null>(null)
watchEffect(() => {
  if (grid.value) onSizeChange()
})

const currentGuess = computed(() => guesses.value.find(o => !o.confirmed))

const currentRowIndex = computed(() =>
  currentGuess.value ? guesses.value.indexOf(currentGuess.value) : -1,
)
const currentColumnIndex = computed(() => currentGuess.value?.word.length ?? -1)

/**
 * List of letters not in the word
 */
const invalidLetters = ref<Set<string>>(new Set())

/**
 * Firefox shows issues with aspect-ratio.
 * This is a hack to make sure that the grid always looks good.
 */
function onSizeChange(): void {
  if (grid.value) {
    grid.value.style.height = window.innerWidth * 0.8 + 'px'
  }
}

function onKeyPress(e: KeyboardEvent): void {
  if (e.shiftKey || e.ctrlKey) return
  const k = e.key.toLowerCase()
  const keyCode = k.charCodeAt(0)

  // Key between "a" and "z"
  if (k.length === 1 && keyCode >= 97 && keyCode <= 122) {
    pressLetter(k)
  }

  // Enter
  if (k === 'enter') {
    pressEnter()
  }

  // Backspace
  if (k === 'backspace') {
    pressBackspace()
  }
}

function pressLetter(letter: string): void {
  if (!currentGuess.value || isGameover.value) return
  if (currentGuess.value.word.length === 5) {
    return
  }
  currentGuess.value.word += letter
}

function pressBackspace(): void {
  if (!currentGuess.value) return
  currentGuess.value.word = currentGuess.value.word.substring(
    0,
    currentGuess.value.word.length - 1,
  )
}

function pressEnter(): void {
  if (!currentGuess.value || isGameover.value) return
  const word = currentGuess.value.word
  if (word.length < 5) return

  // Check if the word exists
  if (word && !doesWordExist(word)) {
    showToast(
      "Ce mot n'existe pas dans notre liste.<br>Veuillez essayer un autre mot.",
      5000,
    )
    return
  }

  currentGuess.value.confirmed = true
  saveConfirmedWords(guesses.value.map(o => o.word))

  // Save incorrect letters to darken them
  word
    .split('')
    .filter(l => !wordToFind.includes(l))
    .forEach(l => {
      invalidLetters.value.add(l)
    })

  if (isGameover.value) {
    saveScore()
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

onMounted(() => {
  window.addEventListener('resize', onSizeChange)
  document.addEventListener('keydown', onKeyPress) // Note: 'keypress' doesn't work for backspace

  /**
   * Load saved words at startup
   */
  const savedWords = loadConfirmedWords()
  for (let i = 0; i < savedWords.length; ++i) {
    guesses.value[i].word = savedWords[i]
    pressEnter()
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onSizeChange)
  document.removeEventListener('keydown', onKeyPress)
})
</script>
