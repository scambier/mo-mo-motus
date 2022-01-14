<template>
  <ModalBase>
    <div class="mb-4 text-4xl">
      Oh non 😭
    </div>
    <div class="mb-4 text-xl">
      Le mot à trouver était
      <b><a
        :href="`https://fr.wiktionary.org/wiki/${wordToFindAccented}`"
        class="underline"
        target="_blank">{{ wordToFind.toUpperCase() }}</a></b>
    </div>
    <div class="mb-4">
      Bien essayé quand même, vous retenterez votre chance dans
      {{ getTimeBeforeNextWord() }} !
    </div>
    <SharingPanel />
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import {
  getTimeBeforeNextWord,
  wordToFind,
  wordToFindAccented,
} from '@/composables/game-state'
import SharingPanel from './common/SharingPanel.vue'
</script>
