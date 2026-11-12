<script setup>
defineProps({
  objets: { type: Array, required: true }
})
</script>

<template>
  <div class="vitrine">
    <MaterielCarte
      v-for="objet in objets"
      :key="objet.id"
      :nom="objet.nom"
      :texte="objet.texte"
      :image="objet.image"
      :categorie="objet.categorie"
    />
  </div>
</template>

<style scoped>
.vitrine {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 28px;
  padding: 28px;
  border: 6px solid #2b2b2b;
  border-radius: var(--rayon);
  background: linear-gradient(180deg, #1c1c1c, var(--sombre));
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.08), 0 12px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
  .vitrine {
    padding: 16px;
    gap: 20px;
  }
}
</style>
