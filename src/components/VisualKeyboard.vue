<template>
  <div>
    <!-- Row -->
    <div
      v-for="(line, i) in keyboard"
      :key="`line-${i}`"
      class="flex h-1/3 justify-center w-full mb-1 gap-1">
      <!-- Keys -->
      <template
        v-for="(letter, j) in line"
        :key="`key-${i}`">
        <!-- Enter -->

        <LetterBox
          v-if="i === 2 && j === 0"
          is="button"
          @click="emit('enter')"
          class="bg-gray-600">
          ENTRÉE
        </LetterBox>

        <!-- Letter -->
        <LetterBox
          is="button"
          @click="emit('input', letter)"
          class="uppercase bg-gray-600"
          :class="{ 'text-gray-400 bg-black': greyedOut?.has(letter) }">
          {{ letter }}
        </LetterBox>

        <!-- Delete -->

        <LetterBox
          v-if="i === 2 && j === line.length - 1"
          is="button"
          @click="emit('delete')"
          class="bg-gray-600">
          <BackspaceIcon class="w-6 h-6" />
        </LetterBox>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackspaceIcon } from '@heroicons/vue/outline/esm'
import LetterBox from './LetterBox.vue'

const emit = defineEmits<{
  (e: 'enter'): void
  (e: 'delete'): void
  (e: 'input', letter: string): void
}>()

defineProps<{ greyedOut?: Set<string> }>()

const keyboard = [
  'azertyuiop'.split(''),
  'qsdfghjklm'.split(''),
  'wxcvbn'.split(''),
]
</script>
