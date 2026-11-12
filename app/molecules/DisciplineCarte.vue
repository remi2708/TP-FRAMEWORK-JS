<script setup>
defineProps({
  slug: { type: String, required: true },
  nom: { type: String, required: true },
  resume: { type: String, required: true },
  image: { type: String, required: true },
  couleur: { type: String, required: true }
})
</script>

<template>
  <NuxtLink :to="`/disciplines/${slug}`" class="carte">
    <img :src="image" :alt="nom" loading="lazy" />
    <div class="texte" :style="{ background: couleur }">
      <h2>{{ nom }}</h2>
      <p>{{ resume }}</p>
      <span>Découvrir →</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.carte {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--rayon);
  color: white;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s;
}

.carte:hover {
  transform: translateY(-6px);
}

img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #eef2f5;
}

.texte {
  flex: 1;
  padding: 16px;
}

h2 {
  margin: 0 0 4px;
}

p {
  margin: 0 0 12px;
}

span {
  font-weight: 600;
}
</style>
