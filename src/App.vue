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
import ToastMessage from './components/ToastMessage.vue'
import ModalLoser from './components/modals/ModalLoser.vue'
import ModalWinner from './components/modals/ModalWinner.vue'
import ModalWelcome from './components/modals/ModalWelcome.vue'
import {
  isVisibleModalLoser,
  isVisibleModalWelcome,
  isVisibleModalWinner,
} from './composables/modal-manager'
</script>
