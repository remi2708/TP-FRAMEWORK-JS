<template>
  <EnTete />
  <main>
    <slot />
  </main>
  <PiedDePage />
  <ModalManager />
</template>

<style scoped>
main {
  min-height: 70vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
}
</style>
