<script setup>
const valeur = defineModel({ type: String, default: '' })
</script>

<template>
  <input v-model="valeur" />
</template>

<style scoped>
input {
  padding: 8px;
}
</style>
