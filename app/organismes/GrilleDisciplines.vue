<script setup>
defineProps({
  disciplines: { type: Array, required: true }
})
</script>

<template>
  <section>
    <h2>Les trois disciplines</h2>
    <div class="grille">
      <DisciplineCarte
        v-for="discipline in disciplines"
        :key="discipline.slug"
        :slug="discipline.slug"
        :nom="discipline.nom"
        :resume="discipline.resume"
        :image="discipline.image"
        :couleur="discipline.couleur"
      />
    </div>
  </section>
</template>

<style scoped>
.grille {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
