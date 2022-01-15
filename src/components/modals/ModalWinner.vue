<template>
  <ModalBase @close="isVisibleModalWinner = false">
    <div class="mb-4 text-4xl">
      Bien joué 🎉
    </div>
    <div class="mb-4 text-xl">
      Le mot à trouver était
      <b><a
        :href="`https://fr.wiktionary.org/wiki/${wordToFindAccented}`"
        class="underline"
        target="_blank">{{ wordToFind.toUpperCase() }}</a></b>
    </div>
    <div class="mb-4">
      Rendez-vous dans <span v-html="getTimeBeforeNextWord()" /> pour le
      prochain mot !
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
import { isVisibleModalWinner } from '@/composables/modal-manager'
</script>
