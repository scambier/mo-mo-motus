<template>
  <ModalBase ref="base">
    <div class="mb-4">
      Chaque jour, à minuit et à midi, un nouveau mot de 5 lettres est choisi au
      hasard. Il s'agit du même mot, pour tous les joueurs.
    </div>
    <div class="mb-4">
      Vous avez 6 essais pour trouver le mot en question.<br>
      Une lettre bien placée est 🟩.<br>
      Une lettre mal placée est 🟨.<br>
      Une lettre qui n'est pas dans le mot reste ⬛.
    </div>
    <button
      @click="base?.closeModal()"
      class="items-center p-2 bg-green-800 hover:bg-green-900 rounded">
      C'est parti !
    </button>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from './ModalBase.vue'
import { ref } from 'vue'

const base = ref<InstanceType<typeof ModalBase> | null>(null)
</script>
