<script setup>
defineProps({
  nom: { type: String, required: true },
  texte: { type: String, default: '' },
  image: { type: String, default: '' },
  categorie: { type: String, required: true }
})
</script>

<template>
  <figure class="carte">
    <div class="socle">
      <Badge class="badge">{{ categorie }}</Badge>
      <img v-if="image" :src="image" :alt="nom" loading="lazy" />
    </div>
    <figcaption>
      <h2>{{ nom }}</h2>
      <p>{{ texte }}</p>
    </figcaption>
  </figure>
</template>

<style scoped>
.carte {
  margin: 0;
  overflow: hidden;
  border-radius: 6px;
  background: var(--surface);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
  transition: transform 0.25s, box-shadow 0.25s;
}

.carte:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(255, 107, 0, 0.35);
}

.socle {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 40%, #fff, #dfe5ea);
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.carte:hover img {
  transform: scale(1.06);
}

figcaption {
  padding: 12px 16px 16px;
}

h2 {
  margin: 0 0 4px;
  font-size: 1.1rem;
}

p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
