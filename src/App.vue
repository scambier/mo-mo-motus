<template>
  <router-view />
  <ToastMessage />
  <ModalLoser v-if="isGameover && !isWinner" />
  <ModalWinner v-if="isGameover && isWinner" />
</template>

<script setup lang="ts">
import ToastMessage from './components/ToastMessage.vue'
import { isGameover, isWinner } from './composables/words'
import ModalLoser from './components/ModalLoser.vue'
import ModalWinner from './components/ModalWinner.vue'
</script>
