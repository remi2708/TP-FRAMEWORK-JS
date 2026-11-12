<script setup>
defineProps({
  personne: { type: Object, required: true }
})
</script>

<template>
  <ul>
    <li>Prénom : {{ personne.prenom }}</li>
    <li>Nom : {{ personne.nom }}</li>
    <li>Email : {{ personne.email }}</li>
    <li>Club : {{ personne.club }}</li>
  </ul>
</template>
