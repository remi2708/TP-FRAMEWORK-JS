<script setup>
defineProps({
  to: { type: String, required: true }
})
</script>

<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>

<style scoped>
a {
  color: var(--accent);
  font-weight: 600;
}
</style>
