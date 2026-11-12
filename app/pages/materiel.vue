<script setup>
const materielStore = useMaterielStore()
const modalStore = useModalStore()
</script>

<template>
  <TitrePage>Le matériel</TitrePage>
  <Bouton class="ajouter" @click="modalStore.ouvrir('create')">Ajouter du matériel</Bouton>
  <ListeMateriel :objets="materielStore.objets" />
  <Mention class="credits">
    Photos issues de Wikimedia Commons : combinaison (US Navy, domaine public), lunettes (Jpogi, domaine public),
    vélo (GS, CC BY-SA 4.0), casque (MET Helmets, CC BY-SA 4.0), pédales (Glory Cycles, CC BY 2.0),
    chaussures de vélo (PetarM, CC BY-SA 3.0), chaussures de course (Tiia Monto, CC BY-SA 4.0),
    montre (Tristan Haskins, CC BY-SA 3.0), gels (Richard Masoner, CC BY-SA 4.0).
  </Mention>
</template>

<style scoped>
.ajouter {
  margin-bottom: 24px;
}

.credits {
  margin-top: 24px;
}
</style>
