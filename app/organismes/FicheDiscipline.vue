<script setup>
defineProps({
  discipline: { type: Object, required: true }
})
</script>

<template>
  <article>
    <figure>
      <img :src="discipline.image" :alt="discipline.nom" />
      <figcaption>
        <Mention>Photo : {{ discipline.credit }}</Mention>
      </figcaption>
    </figure>

    <p v-for="paragraphe in discipline.description" :key="paragraphe">{{ paragraphe }}</p>
    <Mention>
      Source :
      <a :href="discipline.source.url" target="_blank" rel="noopener">Wikipédia – {{ discipline.source.titre }}</a>
      (licence CC BY-SA 4.0).
    </Mention>

    <Encadre :couleur="discipline.couleur">
      <p><strong>{{ discipline.triathlon }}</strong></p>
    </Encadre>
  </article>
</template>

<style scoped>
figure {
  margin: 0 0 24px;
}

img {
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: contain;
  border-radius: var(--rayon);
  background: #eef2f5;
}

a {
  color: var(--accent);
}
</style>
