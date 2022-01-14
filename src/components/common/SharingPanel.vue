<template>
  <div class="flex flex-col items-center">
    <ButtonGreen @click="toClipboard">
      <IconShare class="mr-2" /> Partager votre score
    </ButtonGreen>
    <div class="p-2 mt-2">
      <div
        class="p-2 mb-2 text-sm text-left rounded border-2 border-white/20"
        v-html="getSharingText().replace(/(?:\r\n|\r|\n)/g, '<br>')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  countTotalGuesses,
  guesses,
  isWinner,
  LetterPosition,
  letterValidity,
} from '@/composables/game-state'
import { showToast } from '@/composables/toast-manager'
import IconShare from '~icons/ph/share-network'
import ButtonGreen from './ButtonGreen.vue'

function positionToEmoji(pos: LetterPosition): string {
  switch (pos) {
    case LetterPosition.Invalid:
      return '⬛'
    case LetterPosition.Misplaced:
      return '🟨'
    case LetterPosition.Perfect:
      return '🟩'
  }
}

function getSharingText(): string {
  const emojis: string[] = []
  for (let i = 0; i < guesses.value.length; ++i) {
    const guess = guesses.value[i].word
    emojis.push(
      guess
        .split('')
        .map((l, j) => positionToEmoji(letterValidity(l, j)))
        .join(''),
    )
  }
  const tries = `${countTotalGuesses.value}/6\n`
  return `Mo-mo-motus\n${isWinner.value ? tries : ''}${emojis
    .filter(o => !!o)
    .join('\n')}\nhttps://scambier.xyz/momomotus/`
}

function toClipboard(): void {
  navigator.clipboard.writeText(getSharingText())
  showToast('Copié dans le presse-papier', 3000)
}
</script>
