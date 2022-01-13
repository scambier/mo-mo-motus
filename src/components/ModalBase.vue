<template>
  <!-- Overlay -->
  <div
    v-if="isVisible"
    class="flex absolute top-0 left-0 justify-center w-screen h-screen text-white bg-black/40">
    <!-- Content -->
    <div
      class="relative p-8 m-4 mt-16 h-fit text-lg text-center bg-slate-900 rounded-lg">
      <button
        class="absolute top-2 right-2 text-xl"
        @click="closeModal">
        <IconClose />
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconClose from '~icons/ph/x'

const emits = defineEmits<{ (e: 'clickClose'): void }>()

const isVisible = ref(true)

function closeModal(): void {
  isVisible.value = false
  emits('clickClose')
}

defineExpose({ closeModal })
</script>
