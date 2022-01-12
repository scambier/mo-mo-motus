<template>
  <div>
    <!-- Row -->
    <div
      v-for="(line, i) in keyboard"
      :key="`line-${i}`"
      class="flex gap-1 justify-center mb-1 w-full h-1/3">
      <!-- Keys -->
      <template
        v-for="(letter, j) in line"
        :key="`key-${i}`">
        <!-- Enter -->
        <LetterBox
          v-if="i === 2 && j === 0"
          is="button"
          @click="emit('enter')"
          title="Entrée"
          class="flex flex-col bg-gray-600">
          <IconReturn class="w-8 h-8" />
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
          title="Effacer"
          class="bg-gray-600">
          <IconBackspace class="w-6 h-6" />
        </LetterBox>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import LetterBox from './LetterBox.vue'
import IconBackspace from '~icons/ph/arrow-left'
import IconReturn from '~icons/ph/arrow-elbow-down-left'

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
