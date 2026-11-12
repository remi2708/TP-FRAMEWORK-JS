<script setup>
const disciplines = useDisciplines()
</script>

<template>
  <BanniereAccueil />
  <GrilleDisciplines :disciplines="disciplines" />

  <BlocMeteo />

  <Encadre>
    <h2>Du sprint à l'Ironman</h2>
    <p>
      Quatre formats existent, de 750 m de natation à 3,8 km.
      <LienTexte to="/distances">Voir toutes les distances</LienTexte>
      ou
      <LienTexte to="/materiel">découvrir le matériel</LienTexte>.
    </p>
  </Encadre>
</template>
