<template>
  <router-view />
  <Transition>
    <ModalWelcome v-if="isVisibleModalWelcome" />
  </Transition>
  <Transition>
    <ModalStats v-if="isVisibleModalStats" />
  </Transition>

  <ToastMessage />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import ModalWelcome from '@/components/modals/ModalWelcome.vue'
import ToastMessage from '@/components/ToastMessage.vue'

import { plausible } from './analytics'
import ModalStats from './components/modals/ModalStats.vue'
import { initSessionForToday } from './composables/game-state'
import {
  isVisibleModalStats,
  isVisibleModalWelcome,
} from './composables/modal-manager'
import { hasSessionIdChanged } from './storage'

onMounted(() => {
  initSessionForToday()
  window.addEventListener('focus', checkAndReset)
  plausible.enableAutoPageviews()
})

onUnmounted(() => {
  window.removeEventListener('focus', checkAndReset)
})

/**
 * This will reset the game and empty the board,
 * if a new puzzle has started
 */
function checkAndReset(): void {
  if (hasSessionIdChanged()) {
    initSessionForToday(true)
    location.reload()
  }
}
</script>
