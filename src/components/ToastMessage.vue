<template>
  <Transition>
    <div
      v-if="toastVisible"
      class="fixed inset-x-0 top-4 p-3 mx-auto w-max text-center bg-slate-800 rounded"
      v-html="toastMessage" />
  </Transition>
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
import { toastMessage, toastVisible } from '@/composables/toast-manager'
</script>
