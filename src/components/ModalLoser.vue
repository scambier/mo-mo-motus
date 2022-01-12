<template>
  <ModalBase>
    <div class="mb-4 text-4xl">
      Oh non :(
    </div>
    <div class="mb-4 text-3xl">
      Le mot à trouver était
      <b><a
        :href="`https://fr.wiktionary.org/wiki/${wordToFind}`"
        target="_blank">{{ wordToFind.toUpperCase() }}</a></b>
    </div>
    <div class="mb-4">
      Bien essayé quand même, vous retenterez votre chance dans [TODO]!
    </div>

    <div class="flex items-center">
      <span class="grow-0 shrink mr-4 text-left">
        En attendant, vous pouvez toujours montrer votre graphe à vos amis en
        cliquant&nbsp;ici
      </span>
      <ShareButton />
    </div>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import { wordToFind } from '@/composables/words'
import ShareButton from './ShareButton.vue'
</script>
