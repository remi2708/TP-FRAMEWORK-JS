<template>
  <span>
    <slot />
  </span>
</template>

<style scoped>
span {
  padding: 2px 10px;
  border-radius: 99px;
  background: var(--accent);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
