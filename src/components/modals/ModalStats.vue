<template>
  <ModalBase @close="isVisibleModalStats = false">
    <div class="mb-2 text-2xl">
      Statistiques
    </div>
    <div class="flex justify-between">
      <div
        class="flex flex-col"
        :key="item.label"
        v-for="item in statsTexts">
        <span class="text-2xl font-bold md:text-3xl">{{ item.value }}</span><span
          class="text-xs"
          v-html="item.label" />
      </div>
    </div>
    <div class="my-4 w-full text-xs text-left">
      <div
        class="flex mb-1 w-full h-4"
        v-for="i in [1, 2, 3, 4, 5, 6, 0]"
        :key="`bar-${i}`">
        <span class="mr-1 w-6 text-center">{{ i ? i : '💀' }}</span>
        <div class="w-full">
          <div
            class="min-w-fit max-w-full font-bold text-right bg-green-dimmed"
            :style="{ width: winPercentage(i) + '%' }">
            <span class="mx-1">{{ gamesOfScore(i) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isGameover"
      class="mb-2 text-xs md:text-base">
      Le mot à trouver était
      <b><a
        :href="`https://fr.wiktionary.org/wiki/${wordToFindAccented}`"
        class="border-b border-green-dimmed"
        target="_blank">{{ wordToFind.toUpperCase() }}</a></b>.<br>
      Le prochain mot arrive dans <span v-html="getTimeBeforeNextWord()" />
    </div>

    <SharingPanel v-if="isGameover" />
  </ModalBase>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SharingPanel from '@/components/common/SharingPanel.vue'
import {
  getTimeBeforeNextWord,
  isGameover,
  wordToFind,
  wordToFindAccented,
} from '@/composables/game-state'
import { isVisibleModalStats } from '@/composables/modal-manager'
import { gameStats } from '@/composables/statistics'

import ModalBase from './ModalBase.vue'
const stats = gameStats.value
const games = Object.keys(stats.games)
  .sort()
  .map(k => ({ date: k, score: stats.games[k].score, won: stats.games[k].won }))

const statsTexts = ref([
  {
    label: 'Parties',
    value: stats.nbGames,
  },
  {
    label: 'Victoires',
    value: (games.filter(g => g.won).length / games.length || 0) * 100 + '%',
  },
  {
    label: 'Série de<br>victoires',
    value: stats.currentStreak,
  },
  {
    label: 'Meilleure<br>série',
    value: stats.bestStreak,
  },
])

function gamesOfScore(score: number): number {
  if (score === 0) {
    return games.filter(g => !g.won).length
  }
  return games.filter(g => g.won && g.score === score).length
}

function winPercentage(score: number): number {
  return ((gamesOfScore(score) / games.length) || 0) * 100
}
</script>