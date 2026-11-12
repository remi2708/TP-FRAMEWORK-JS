<script setup>
const userStore = useUserStore()

const email = ref('')
const motDePasse = ref('')

function seConnecter() {
  userStore.connexion()
  navigateTo('/')
}
</script>

<template>
  <Formulaire @envoyer="seConnecter">
    <ChampFormulaire id="email" v-model="email" label="Email" type="email" placeholder="ton@email.fr" />
    <ChampFormulaire id="mot-de-passe" v-model="motDePasse" label="Mot de passe" type="password" placeholder="Ton mot de passe" />
    <Bouton type="submit">Se connecter</Bouton>
  </Formulaire>
</template>
