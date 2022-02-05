<template>
  <div
    class="flex absolute top-0 left-0 justify-center w-full h-full bg-black/40">
    <!-- Content -->
    <div
      class="relative p-4 pt-8 m-4 mt-16 w-[32rem] max-w-full h-fit text-lg text-center bg-slate-900 rounded-lg border-2 border-slate-600">
      <button
        aria-label="Fermer"
        class="absolute top-2 right-2 text-xl"
        @click="emit('close', false)">
        <IconClose />
      </button>
      <slot />
    </div>
  </div>
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
import IconClose from '~icons/ph/x'

const emit = defineEmits<{ (e: 'close', v: boolean): void }>()
</script>
