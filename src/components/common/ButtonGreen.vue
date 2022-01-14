<template>
  <button
    @click="emit('click')"
    class="inline-flex grow shrink-0 items-center p-2 bg-green-dimmed hover:bg-green-800 rounded">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>()
</script>
