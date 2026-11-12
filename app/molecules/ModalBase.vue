<script setup>
defineProps({
  titre: { type: String, required: true }
})

const emit = defineEmits(['fermer'])

function fermerAvecEchap(evenement) {
  if (evenement.key === 'Escape') emit('fermer')
}

onMounted(() => window.addEventListener('keydown', fermerAvecEchap))
onUnmounted(() => window.removeEventListener('keydown', fermerAvecEchap))
</script>

<template>
  <div class="fond" @click.self="emit('fermer')">
    <div class="fenetre" role="dialog" aria-modal="true" aria-labelledby="modal-titre">
      <header>
        <h2 id="modal-titre">{{ titre }}</h2>
        <BoutonFermer @click="emit('fermer')" />
      </header>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fond {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
}

.fenetre {
  width: 100%;
  max-width: 440px;
  padding: 24px;
  border-radius: var(--rayon);
  background: var(--surface);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h2 {
  margin: 0;
}
</style>
