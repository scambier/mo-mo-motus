<template>
  <div class="flex flex-col gap-1 mt-4 fixed bottom-0 sm:bottom-auto">
    <div
      v-for="(line, i) in keyboard"
      :key="`line-${i}`"
      class="gap-1 flex w-full justify-center">
      <!-- Keys -->
      <template
        v-for="(letter, j) in line"
        :key="`key-${i}`">
        <!-- Enter -->
        <button
          class="grow-2 shrink-2 basis-0"
          v-if="i === 2 && j === 0"
          @click="emit('enter')">
          <LetterBox> ENTRÉE </LetterBox>
        </button>

        <!-- Letter -->
        <button
          class="flex-1"
          :class="{
            'text-gray-400 bg-black': greyedOut?.has(letter),
          }">
          <LetterBox
            @click="emit('input', letter)"
            class="uppercase">
            {{ letter }}
          </LetterBox>
        </button>

        <!-- Delete -->
        <button
          class="grow-2 shrink-2 basis-0"
          v-if="i === 2 && j === line.length - 1"
          @click="emit('delete')">
          <LetterBox>
            <BackspaceIcon class="w-6 h-6" />
          </LetterBox>
        </button>
      </template>
    </div>
  </div>
  <span />
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
