<template>
  <Transition>
    <div
      v-if="toastVisible"
      class="fixed bg-white p-2 rounded mx-auto top-4 left-0 right-0 w-max text-center"
      v-html="toastMessage" />
  </Transition>
</template>

<style>
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
