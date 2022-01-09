<template>
  <div class="max-w-lg mx-auto">
    <!-- Grid -->
    <div class="mx-auto">
      <div class="grid grid-cols-5 gap-1">
        <template v-for="y in 6">
          <LetterBox class="aspect-square" v-for="x in 5">
            <span>
              {{ words[y - 1]?.[x - 1] ?? '&nbsp;' }}
            </span>
          </LetterBox>
        </template>
      </div>
    </div>

    <!-- Keyboard -->
    <div class="flex flex-col gap-1 mt-4">
      <div
        v-for="(line, i) in keyboard"
        class="flex gap-1 w-full justify-center">
        <template v-for="(letter, j) in line">
          <LetterBox class="" v-if="i === 2 && j === 0"> enter </LetterBox>
          <LetterBox class="flex-1" @click="insertLetter(letter)">
            <span>{{ letter }}</span>
          </LetterBox>
          <LetterBox class="" v-if="i === 2 && j === line.length - 1">
            del
          </LetterBox>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LetterBox from './components/LetterBox.vue'

const keyboard = [
  'azertyuiop'.toUpperCase().split(''),
  'qsdfghjklm'.toUpperCase().split(''),
  'wxcvbn'.toUpperCase().split(''),
]

const wordToFind = 'abaca'
const wordIndex = ref(0)
const words = ref(['wtf', 'bbq', '', '', '', ''])

const currentWord = computed(() => words.value[wordIndex.value])

function insertLetter(letter: string) {
  console.log(letter)
}
</script>
