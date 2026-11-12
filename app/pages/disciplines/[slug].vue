<script setup>
definePageMeta({
  validate: (route) => Boolean(trouverDiscipline(route.params.slug))
})

const route = useRoute()
const discipline = computed(() => trouverDiscipline(route.params.slug))
</script>

<template>
  <LienTexte to="/">← Retour à l'accueil</LienTexte>
  <TitrePage>{{ discipline.nom }}</TitrePage>
  <FicheDiscipline :discipline="discipline" />
</template>
