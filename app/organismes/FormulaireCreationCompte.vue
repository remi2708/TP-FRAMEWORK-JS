<script setup>
const nom = ref('')
const email = ref('')
const motDePasse = ref('')
const confirmation = ref('')
const envoye = ref(false)
</script>

<template>
  <MessageLien v-if="envoye" texte="Compte créé !" lien="/connexion" libelle="Se connecter" />
  <Formulaire v-else @envoyer="envoye = true">
    <ChampFormulaire id="nom" v-model="nom" label="Nom" placeholder="Ton nom" />
    <ChampFormulaire id="email" v-model="email" label="Email" type="email" placeholder="ton@email.fr" />
    <ChampFormulaire id="mot-de-passe" v-model="motDePasse" label="Mot de passe" type="password" placeholder="Ton mot de passe" />
    <ChampFormulaire
      id="confirmation"
      v-model="confirmation"
      label="Confirmer le mot de passe"
      type="password"
      placeholder="Répète ton mot de passe"
    />
    <Bouton type="submit">Créer mon compte</Bouton>
  </Formulaire>
</template>
