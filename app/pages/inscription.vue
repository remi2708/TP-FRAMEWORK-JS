<script setup>
const userStore = useUserStore()
</script>

<template>
  <TitrePage>Inscription à une course</TitrePage>
  <FormulaireInscription v-if="userStore.connectedUser" />
  <MessageLien v-else texte="Tu dois être connecté pour t'inscrire à une course." lien="/connexion" libelle="Se connecter" />
</template>
