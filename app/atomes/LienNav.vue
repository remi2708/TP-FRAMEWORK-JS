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
  margin-left: 16px;
  color: white;
  text-decoration: none;
}

a:hover,
a.router-link-exact-active {
  color: var(--accent);
}

@media (max-width: 600px) {
  a {
    margin: 0 8px;
  }
}
</style>
