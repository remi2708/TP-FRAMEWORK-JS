<template>
  <section>
    <p class="surtitre">Le triathlon</p>
    <TitrePage>Trois sports, une seule course</TitrePage>
    <p>Le chrono ne s'arrête pas entre les épreuves, même pendant les changements de tenue.</p>
    <div class="actions">
      <Bouton to="/inscription">S'inscrire à une course</Bouton>
      <LienTexte to="/distances">Voir les distances</LienTexte>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 40px;
  padding: 40px 24px;
  border-radius: var(--rayon);
  background: linear-gradient(135deg, var(--sombre), #2b2b2b);
  color: white;
}

h1 {
  margin: 0 0 8px;
}

.surtitre {
  margin: 0;
  color: var(--accent);
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}
</style>
