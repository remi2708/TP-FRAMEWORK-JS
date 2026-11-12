<script setup>
defineProps({
  connecte: { type: Boolean, default: false }
})
</script>

<template>
  <nav>
    <LienNav to="/">Accueil</LienNav>
    <LienNav to="/disciplines/natation">Natation</LienNav>
    <LienNav to="/disciplines/velo">Vélo</LienNav>
    <LienNav to="/disciplines/course">Course</LienNav>
    <LienNav to="/distances">Les distances</LienNav>
    <LienNav to="/materiel">Matériel</LienNav>
    <LienNav v-if="connecte" to="/inscription">Inscription</LienNav>
  </nav>
</template>
