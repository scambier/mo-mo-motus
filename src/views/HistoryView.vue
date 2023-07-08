<template>
  {{ history }}
</template>

<script setup lang="ts">
import { shuffled } from '@/composables/game-state';
import { numberOfGamesSinceStart } from '@/utils';

const history = shuffled.slice(0, numberOfGamesSinceStart() - 1)
</script>