<template>
  <Component
    :is="is"
    class="flex flex-1 items-center border-slate-600 rounded justify-center text-white select-none">
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ is?: string }>()
const is = ref(props.is ?? 'div')
</script>
