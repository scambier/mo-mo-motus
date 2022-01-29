<template>
  <ModalBase @close="isVisibleModalWelcome = false">
    <p class="mb-4">
      Chaque jour, à midi et minuit (CET), un nouveau mot de 5 lettres est
      choisi au hasard.<br><strong>Il s'agit du même mot, pour tous les joueurs.</strong>
    </p>
    <p class="mb-4">
      Vous avez 6 essais pour trouver le mot en question.<br>
      Une lettre bien placée est 🟩.<br>
      Une lettre mal placée est 🟨.<br>
      Une lettre qui n'est pas dans le mot reste ⬛.
    </p>
    <div>
      <ButtonGreen @click="isVisibleModalWelcome = false">
        C'est parti !
      </ButtonGreen>
    </div>
    <div class="mt-16 text-xs">
      <a
        class="underline"
        href="https://www.powerlanguage.co.uk/wordle/"
        target="_blank">Le jeu Wordle original</a>
      -
      <a
        class="underline"
        href="https://github.com/scambier/wordle-fr"
        target="_blank">Code source</a>
      <br><br>
      <div class="text-right text-slate-700">
        Build {{ buildDate }}
      </div>
    </div>
  </ModalBase>
</template>

<script setup lang="ts">
import ButtonGreen from '@/components/common/ButtonGreen.vue'
import { isVisibleModalWelcome } from '@/composables/modal-manager'

import ModalBase from './ModalBase.vue'

const buildDate = import.meta.env.VITE_BUILD_DATE
</script>
