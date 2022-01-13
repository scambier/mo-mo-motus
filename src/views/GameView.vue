<template>
  <div class="flex flex-col items-center mx-auto w-full max-w-lg h-full">
    <h1 class="m-4 text-3xl font-bold text-white">
      MO-MO-MOTUS
    </h1>
    <!-- Grid container -->
    <div class="flex flex-1 justify-center w-full">
      <!-- Grid -->
      <div
        ref="grid"
        class="aspect-[5/6] grid grid-cols-5 grid-rows-6 gap-1 m-4 max-w-full md:max-h-[50vh]">
        <template v-for="y in [0, 1, 2, 3, 4, 5]">
          <LetterBox
            v-for="x in [0, 1, 2, 3, 4]"
            class="h-[100%] text-2xl font-bold uppercase border-2"
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
      class="grow-0 shrink-0 px-1 m-2 mb-3 w-full h-48 md:mb-8"
      @input="letter => pressLetter(letter)"
      @enter="pressEnter"
      @delete="pressBackspace"
      :greyed-out="invalidLetters" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect, onMounted, onUnmounted } from 'vue'
import LetterBox from '@/components/LetterBox.vue'
import {
  doesWordExist,
  guesses,
  isGameover,
  LetterPosition,
  letterValidity,
} from '@/composables/game-state'
import VisualKeyboard from '@/components/VisualKeyboard.vue'
import { showToast } from '@/composables/toast-manager'
import {
  getConfirmedWords as getsavedWords,
  saveConfirmedWords,
} from '@/composables/storage'

const grid = ref<HTMLDivElement | null>(null)
watchEffect(() => {
  if (grid.value) onSizeChange()
})
/**
 * Firefox shows issues with aspect-ratio.
 * This is a hack to make sure that the grid always looks good.
 */
function onSizeChange(): void {
  if (grid.value) {
    grid.value.style.height = (window.innerWidth / 5) * 6 + 'px'
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
    console.log('del')
    pressBackspace()
  }
}

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

onMounted(() => {
  window.addEventListener('resize', onSizeChange)
  document.addEventListener('keydown', onKeyPress) // Note: 'keypress' doesn't work for backspace

  /**
   * Load saved words at startup
   */
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
