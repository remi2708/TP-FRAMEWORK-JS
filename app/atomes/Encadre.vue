<script setup>
defineProps({
  couleur: { type: String, default: 'var(--accent)' }
})
</script>

<template>
  <section :style="{ borderColor: couleur }">
    <slot />
  </section>
</template>

<style scoped>
section {
  margin: 40px 0;
  padding: 4px 24px;
  border-left: 6px solid;
  border-radius: var(--rayon);
  background: var(--surface);
}
</style>
