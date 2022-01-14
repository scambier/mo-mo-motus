<template>
  <ModalBase
    ref="base"
    @close="isVisibleModalWelcome = false">
    <p class="mb-4">
      Chaque jour, à minuit et à midi, un nouveau mot de 5 lettres est choisi au
      hasard.<br>Il s'agit du même mot, pour tous les joueurs.
    </p>
    <p class="mb-4">
      Vous avez 6 essais pour trouver le mot en question.<br>
      Une lettre bien placée est 🟩.<br>
      Une lettre mal placée est 🟨.<br>
      Une lettre qui n'est pas dans le mot reste ⬛.
    </p>
    <div>
      <ButtonGreen @click="base?.closeModal()">
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
        href="https://github.com/scambier/wordle-fr">Code source</a>
    </div>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import { ref } from 'vue'
import { isVisibleModalWelcome } from '@/composables/modal-manager'
import ButtonGreen from './common/ButtonGreen.vue'

const base = ref<InstanceType<typeof ModalBase> | null>(null)
</script>
