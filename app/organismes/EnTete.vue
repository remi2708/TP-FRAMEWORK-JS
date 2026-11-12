<script setup>
const userStore = useUserStore()
const { nomComplet } = useProfil()
</script>

<template>
  <header>
    <Logo />
    <MenuNav :connecte="Boolean(userStore.connectedUser)" />
    <InfoUtilisateur :nom="nomComplet" @deconnexion="userStore.deconnexion()" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background: var(--sombre);
  color: white;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
