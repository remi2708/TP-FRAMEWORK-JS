<script setup>
const userStore = useUserStore()
</script>

<template>
  <TitrePage>Mon espace</TitrePage>

  <template v-if="userStore.connectedUser">
    <h2>Mes informations</h2>
    <FicheIdentite :personne="userStore.connectedUser" />
    <h2>Mes inscriptions</h2>
    <ListeInscriptions />
  </template>
  <MessageLien v-else texte="Tu n'es pas connecté." lien="/connexion" libelle="Se connecter" />

  <AnnuaireMembres />
</template>
