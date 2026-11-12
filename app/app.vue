<template>
  <MainTemplate>
    <NuxtPage />
  </MainTemplate>
</template>

<style>
:root {
  --accent: #ff6b00;
  --sombre: #111;
  --texte: #1d2a33;
  --surface: #fff;
  --erreur: #c62828;
  --rayon: 8px;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  background: linear-gradient(180deg, #e3eef6, #fdf1e6);
  color: var(--texte);
}

h1,
h2 {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: 2.5rem;
}

img {
  max-width: 100%;
}

button,
input,
select {
  font: inherit;
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.8rem;
  }
}
</style>
