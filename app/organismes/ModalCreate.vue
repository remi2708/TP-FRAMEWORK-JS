<script setup>
const emit = defineEmits(['fermer'])

const materielStore = useMaterielStore()

const nom = ref('')
const categorie = ref('')
const texte = ref('')

function creer() {
  materielStore.ajouter({ nom: nom.value.trim(), categorie: categorie.value, texte: texte.value.trim() })
  emit('fermer')
}
</script>

<template>
  <ModalBase titre="Ajouter du matériel" @fermer="emit('fermer')">
    <Formulaire @envoyer="creer">
      <ChampFormulaire id="materiel-nom" v-model="nom" label="Nom" placeholder="Ex : ceinture porte-dossard" required />
      <ChampFormulaire id="materiel-categorie" label="Catégorie">
        <ListeDeroulante
          id="materiel-categorie"
          v-model="categorie"
          :options="materielStore.categories"
          placeholder="Choisis une catégorie"
          required
        />
      </ChampFormulaire>
      <ChampFormulaire id="materiel-texte" v-model="texte" label="Description" placeholder="À quoi sert-il ?" />
      <Bouton type="submit">Ajouter</Bouton>
    </Formulaire>
  </ModalBase>
</template>
