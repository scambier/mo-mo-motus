<template>
  <!-- Overlay -->
  <Transition>
    <div
      v-if="isVisible"
      class="flex absolute top-0 left-0 justify-center items-center w-screen h-screen text-white bg-black/40">
      <!-- Content -->
      <div class="relative p-8 text-lg text-center bg-slate-900 rounded-lg">
        <button
          class="absolute top-2 right-2 text-xl"
          @click="closeModal">
          <IconClose />
        </button>
        <slot />
      </div>
    </div>
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
}</style>

<script setup lang="ts">
import { ref } from 'vue'
import IconClose from '~icons/ph/x'

const emits = defineEmits<{ (e: 'clickClose'): void }>()

const isVisible = ref(true)

function closeModal(): void {
  isVisible.value = false
  emits('clickClose')
}
</script>
