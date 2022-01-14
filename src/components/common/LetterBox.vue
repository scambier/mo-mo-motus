<template>
  <Component
    :is="is"
    class="flex flex-1 justify-center items-center p-1 rounded border-slate-600 select-none">
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ is?: string }>()
const is = ref(props.is ?? 'div')
</script>
