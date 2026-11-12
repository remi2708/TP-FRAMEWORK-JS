<script setup>
defineProps({
  to: { type: String, default: null },
  type: { type: String, default: 'button' }
})
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="bouton">
    <slot />
  </NuxtLink>
  <button v-else :type="type" class="bouton">
    <slot />
  </button>
</template>

<style scoped>
.bouton {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>
