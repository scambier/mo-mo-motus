<template>
  <button
    @click="toClipboard"
    class="flex grow shrink-0 items-center p-2 bg-white/5 rounded border-2 border-green-500">
    <IconShare class="mr-2" /> Partager
  </button>
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

function getEmojis(): string {
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
  return `Mo-mo-motus\n${isWinner.value ? tries : ''}${emojis.join(
    '\n',
  )}\nhttps://scambier.xyz/momomotus/`
}

function toClipboard(): void {
  const share = getEmojis()
  navigator.clipboard.writeText(getEmojis())
  showToast('Copié dans le presse-papier', 3000)
}
</script>
