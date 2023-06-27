<template>
  {{ history }}
</template>

<script setup lang="ts">
import { shuffled, numberOfGamesSinceStart } from '@/composables/game-state';

const history = shuffled.slice(0, numberOfGamesSinceStart() - 1)
</script>