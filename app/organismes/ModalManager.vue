<script setup>
import { ModalCreate } from '#components'

const modals = {
  create: ModalCreate
}

const modalStore = useModalStore()
</script>

<template>
  <Teleport to="body">
    <component :is="modals[modalStore.modalActive]" v-if="modalStore.modalActive" @fermer="modalStore.fermer()" />
  </Teleport>
</template>
