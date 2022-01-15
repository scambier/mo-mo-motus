<template>
  <div class="flex flex-row justify-between w-full border-b border-slate-400">
    <div class="pl-2 w-8 text-xl">
      <button
        @click="isVisibleModalWelcome = true"
        class="h-fit">
        <IconQuestion />
      </button>
    </div>
    <h1 class="flex-1 text-3xl font-bold text-center">
      MO-MO-MOTUS
    </h1>
    <div class="pl-2 w-8 text-xl">
      <button
        v-if="false"
        @click="isVisibleModalWelcome = true"
        class="h-fit">
        <IconChart />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isVisibleModalWelcome } from '@/composables/modal-manager'
import IconQuestion from '~icons/ph/question'
import IconChart from '~icons/ph/chart-bar'
</script>
