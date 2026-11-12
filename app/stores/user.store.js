export const useUserStore = defineStore('user', () => {
  const connectedUser = ref(null)
  const inscriptions = ref([])

  function connexion() {
    connectedUser.value = {
      prenom: 'Alex',
      nom: 'Martin',
      email: 'alex.martin@exemple.fr',
      club: 'Tri Club Bordeaux'
    }
  }

  function deconnexion() {
    connectedUser.value = null
  }

  function ajouterInscription(course) {
    if (inscriptions.value.some((inscription) => inscription.course === course)) return false

    inscriptions.value.push({
      id: Date.now(),
      course,
      date: new Date().toLocaleDateString('fr-FR')
    })
    return true
  }

  function annulerInscription(id) {
    inscriptions.value = inscriptions.value.filter((inscription) => inscription.id !== id)
  }

  return { connectedUser, inscriptions, connexion, deconnexion, ajouterInscription, annulerInscription }
})
