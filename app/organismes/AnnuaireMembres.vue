<script setup>
const { membres, viewedProfile, fetchViewedProfile } = useViewedProfile()
</script>

<template>
  <section>
    <h2>Les membres du club</h2>
    <div class="membres">
      <Bouton v-for="membre in membres" :key="membre.id" @click="fetchViewedProfile(membre.id)">
        {{ membre.prenom }}
      </Bouton>
    </div>
    <FicheIdentite v-if="viewedProfile" :personne="viewedProfile" />
    <p v-else>Clique sur un membre pour voir son profil.</p>
  </section>
</template>

<style scoped>
.membres {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
