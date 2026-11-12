<template>
  <p role="alert">
    <slot />
  </p>
</template>

<style scoped>
p {
  color: var(--erreur);
}
</style>
