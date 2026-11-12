const membres = [
  { id: 1, prenom: 'Alex', nom: 'Martin', email: 'alex.martin@exemple.fr', club: 'Tri Club Bordeaux' },
  { id: 2, prenom: 'Sarah', nom: 'Dubois', email: 'sarah.dubois@exemple.fr', club: 'Tri Club Bordeaux' },
  { id: 3, prenom: 'Karim', nom: 'Benali', email: 'karim.benali@exemple.fr', club: 'Tri Club Bordeaux' }
]

export function useViewedProfile() {
  const viewedProfile = ref(null)

  function fetchViewedProfile(userId) {
    viewedProfile.value = membres.find((membre) => membre.id === userId)
  }

  return { membres, viewedProfile, fetchViewedProfile }
}
