<script setup>
const userStore = useUserStore()
</script>

<template>
  <ul v-if="userStore.inscriptions.length">
    <LigneInscription
      v-for="inscription in userStore.inscriptions"
      :key="inscription.id"
      :course="inscription.course"
      :date="inscription.date"
      @annuler="userStore.annulerInscription(inscription.id)"
    />
  </ul>
  <MessageLien v-else texte="Aucune inscription pour le moment." lien="/inscription" libelle="S'inscrire à une course" />
</template>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
</style>
