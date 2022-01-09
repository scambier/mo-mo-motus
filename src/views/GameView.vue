<template>
  <div class="max-w-lg mx-auto">
    <!-- Grid -->
    <div class="mx-auto w-64" style="aspect-ratio: 5/6">
      <div class="grid grid-cols-5 gap-1">
        <template v-for="y in 6">
          <LetterBox
            class="aspect-square"
            :class="{
              'bg-green-500':
                guesses[y - 1].confirmed &&
                letterValidity(getLetter(y - 1, x - 1), x - 1) ===
                  LetterPosition.Perfect,
              'bg-yellow-500':
                guesses[y - 1].confirmed &&
                letterValidity(getLetter(y - 1, x - 1), x - 1) ===
                  LetterPosition.Misplaced,
            }"
            v-for="x in 5">
            <span v-html="getLetter(y - 1, x - 1)"></span>
          </LetterBox>
        </template>
      </div>
    </div>

    <!-- Keyboard -->
    <div class="flex flex-col gap-1 mt-4 max-w-full">
      <div
        v-for="(line, i) in keyboard"
        class="flex gap-1 w-full justify-center">
        <template v-for="(letter, j) in line">
          <!-- Enter -->
          <LetterBox v-if="i === 2 && j === 0" @click="checkCurrentWord">
            ENTRÉE
          </LetterBox>

          <!-- Letter -->
          <LetterBox
            class="flex-1"
            :class="{ 'text-gray-400 bg-black': invalidLetters.has(letter) }"
            @click="insertLetter(letter)">
            {{ letter }}
          </LetterBox>

          <!-- Delete -->
          <LetterBox
            class=""
            v-if="i === 2 && j === line.length - 1"
            @click="removeLastLetter">
            <BackspaceIcon class="w-6 h-6" />
          </LetterBox>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LetterBox from '@/components/LetterBox.vue'
import { BackspaceIcon } from '@heroicons/vue/outline/esm'
import { getRandomWord, getWordForToday } from '@/composables/words-list'
import { WordInput } from '@/types'

getWordForToday()
const wordToFind = getWordForToday()

enum LetterPosition {
  Invalid,
  Perfect,
  Misplaced,
}

const keyboard = [
  'azertyuiop'.toUpperCase().split(''),
  'qsdfghjklm'.toUpperCase().split(''),
  'wxcvbn'.toUpperCase().split(''),
]

console.log(wordToFind)
// const wordIndex = ref(0)
const guesses = ref<WordInput[]>([
  { word: 'ABOOC', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
  { word: '', confirmed: false },
])
const currentGuess = computed(() => guesses.value.find(o => !o.confirmed))

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
  currentGuess.value.confirmed = true

  // Save incorrect letters to darken them
  for (let i = 0; i < word.length; ++i) {
    if (letterValidity(word[i], i) === LetterPosition.Invalid) {
      invalidLetters.value.add(word[i])
    }
  }
}

function getLetter(wordIndex: number, letterIndex: number): string {
  return guesses.value[wordIndex]?.word[letterIndex] ?? '&nbsp;'
}

function letterValidity(letter: string, index: number): LetterPosition {
  letter = letter.toLowerCase()
  const word = wordToFind.toLowerCase()
  if (word[index] === letter) {
    return LetterPosition.Perfect
  }
  if (word.includes(letter)) {
    return LetterPosition.Misplaced
  }
  return LetterPosition.Invalid
}
</script>
