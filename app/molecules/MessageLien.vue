<script setup>
defineProps({
  texte: { type: String, required: true },
  lien: { type: String, required: true },
  libelle: { type: String, required: true }
})
</script>

<template>
  <p>
    {{ texte }}
    <LienTexte :to="lien">{{ libelle }}</LienTexte>
  </p>
</template>
