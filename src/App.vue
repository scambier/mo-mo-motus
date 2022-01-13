<template>
  <router-view />
  <Transition>
    <ModalWelcome v-if="isVisibleModalWelcome" />
  </Transition>
  <Transition>
    <ModalLoser v-if="isVisibleModalLoser" />
  </Transition>
  <Transition>
    <ModalWinner v-if="isVisibleModalWinner" />
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
import ModalLoser from './components/ModalLoser.vue'
import ModalWinner from './components/ModalWinner.vue'
import ModalWelcome from './components/ModalWelcome.vue'
import { isVisibleModalLoser, isVisibleModalWelcome, isVisibleModalWinner } from './composables/modal-manager'

</script>
