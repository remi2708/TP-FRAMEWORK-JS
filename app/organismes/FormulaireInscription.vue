<script setup>
const userStore = useUserStore()
const profil = useProfil()
const formats = useDistances().map((distance) => distance.format)

const nom = ref(profil.nomComplet.value)
const email = ref(profil.email.value)
const course = ref('')
const statut = ref(null)

function sInscrire() {
  statut.value = userStore.ajouterInscription(course.value) ? 'enregistree' : 'doublon'
}
</script>

<template>
  <div v-if="statut">
    <p v-if="statut === 'enregistree'">Inscription enregistrée !</p>
    <p v-else>Tu es déjà inscrit à cette course.</p>
    <LienTexte to="/profil">Voir mon espace</LienTexte>
  </div>

  <Formulaire v-else @envoyer="sInscrire">
    <ChampFormulaire id="nom" v-model="nom" label="Nom" placeholder="Ton nom" />
    <ChampFormulaire id="email" v-model="email" label="Email" type="email" placeholder="ton@email.fr" />
    <ChampFormulaire id="course" label="Course">
      <ListeDeroulante id="course" v-model="course" :options="formats" placeholder="Choisis une course" required />
    </ChampFormulaire>
    <Bouton type="submit">S'inscrire</Bouton>
  </Formulaire>
</template>
