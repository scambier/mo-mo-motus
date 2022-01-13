<template>
  <router-view />
  <ModalLoser v-if=" isGameover && !isWinner" />
  <ModalWinner v-if="isGameover && isWinner" />
  <ToastMessage />
</template>

<script setup lang="ts">
import ToastMessage from './components/ToastMessage.vue'
import { isGameover, isWinner } from './composables/game-state'
import ModalLoser from './components/ModalLoser.vue'
import ModalWinner from './components/ModalWinner.vue'
</script>
