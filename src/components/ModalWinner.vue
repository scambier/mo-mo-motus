<template>
  <ModalBase>
    <div class="mb-4 text-4xl">
      Bien joué 🎉
    </div>
    <div class="mb-4 text-3xl">
      Le mot à trouver était
      <b><a
        :href="`https://fr.wiktionary.org/wiki/${wordToFind}`"
        class="underline"
        target="_blank">{{ wordToFind.toUpperCase() }}</a></b>
    </div>
    <div class="mb-4">
      Vous pourrez tenter une nouvelle victoire dans [TODO]!
    </div>

    <div class="flex items-center">
      <span class="grow-0 shrink mr-4 text-left">
        En attendant, vous pouvez toujours vous vanter auprès de vos amis.
      </span>
      <ShareButton />
    </div>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import { wordToFind } from '@/composables/game-state'
import ShareButton from './ShareButton.vue'
</script>
