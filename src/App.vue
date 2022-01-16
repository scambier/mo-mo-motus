<template>
  <router-view />
  <Transition>
    <ModalLoser v-if="isVisibleModalLoser" />
    <ModalWinner v-else-if="isVisibleModalWinner" />
    <ModalWelcome v-else-if="isVisibleModalWelcome" />
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

import ModalLoser from '@/components/modals/ModalLoser.vue'
import ModalWelcome from '@/components/modals/ModalWelcome.vue'
import ModalWinner from '@/components/modals/ModalWinner.vue'
import ToastMessage from '@/components/ToastMessage.vue'

import { initSessionForToday } from './composables/game-state'
import {
  isVisibleModalLoser,
  isVisibleModalWelcome,
  isVisibleModalWinner,
} from './composables/modal-manager'
import { hasSessionIdChanged } from './storage'

onMounted(() => {
  initSessionForToday()
  window.addEventListener('focus', checkAndReset)
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
