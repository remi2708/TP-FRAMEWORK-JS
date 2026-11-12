<script setup>
defineProps({
  nom: { type: String, default: '' }
})

const emit = defineEmits(['deconnexion'])
</script>

<template>
  <div>
    <template v-if="nom">
      <NuxtLink to="/profil">{{ nom }}</NuxtLink>
      <Bouton @click="emit('deconnexion')">Se déconnecter</Bouton>
    </template>
    <Bouton v-else to="/connexion">Se connecter</Bouton>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 12px;
}

a:not(.bouton) {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

a:not(.bouton):hover {
  color: var(--accent);
}
</style>
