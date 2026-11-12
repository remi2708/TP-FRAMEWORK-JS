<script setup>
defineProps({
  enLigne: { type: Boolean, default: false }
})

const emit = defineEmits(['envoyer'])
</script>

<template>
  <form :class="{ 'en-ligne': enLigne }" @submit.prevent="emit('envoyer')">
    <slot />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}

.en-ligne {
  flex-direction: row;
  flex-wrap: wrap;
  max-width: none;
}
</style>
