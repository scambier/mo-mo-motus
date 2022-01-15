<template>
  <ModalBase @close="isVisibleModalLoser = false">
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
      <span v-html="getTimeBeforeNextWord()" /> !
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
import SharingPanel from '@/components/common/SharingPanel.vue'
import { isVisibleModalLoser } from '@/composables/modal-manager'
</script>
