<script setup>
defineProps({
  course: { type: String, required: true },
  date: { type: String, required: true }
})

const emit = defineEmits(['annuler'])
</script>

<template>
  <li>
    <span>{{ course }} — inscrit le {{ date }}</span>
    <Bouton @click="emit('annuler')">Annuler</Bouton>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 500px;
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: var(--rayon);
  background: var(--surface);
}
</style>
