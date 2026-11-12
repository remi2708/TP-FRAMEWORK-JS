<script setup>
defineProps({
  options: { type: Array, required: true },
  placeholder: { type: String, default: 'Choisir' }
})

const valeur = defineModel({ type: String, default: '' })
</script>

<template>
  <select v-model="valeur">
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>

<style scoped>
select {
  padding: 8px;
}
</style>
