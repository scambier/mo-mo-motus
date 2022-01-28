<template>
  <div
    class="flex flex-row justify-between items-end py-2 mb-2 w-full border-b border-slate-400">
    <div class="pl-2 w-8 text-xl">
      <button
        aria-label="Instructions"
        @click="isVisibleModalWelcome = true"
        class="h-fit">
        <IconQuestion />
      </button>
    </div>
    <h1 class="flex-1 text-3xl font-bold text-center">
      MO-MO-MOTUS
    </h1>
    <div class="pr-2 w-8 text-xl">
      <button
        aria-label="Statistiques et partage"
        @click="isVisibleModalStats = true"
        class="h-fit">
        <IconChart />
      </button>
    </div>
  </div>
  <div>
    <span>Puzzle n°{{ numberOfGamesSinceStart() }}</span>
  </div>
</template>

<script setup lang="ts">
import { numberOfGamesSinceStart } from '@/composables/game-state'
import {
  isVisibleModalStats,
  isVisibleModalWelcome,
} from '@/composables/modal-manager'
import IconChart from '~icons/ph/chart-bar'
import IconQuestion from '~icons/ph/question'
</script>
