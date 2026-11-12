export const useMaterielStore = defineStore('materiel', () => {
  const objets = ref([
    { id: 1, categorie: 'Natation', nom: 'Combinaison', texte: 'Néoprène pour les épreuves en eau libre.', image: '/images/combinaison.jpg' },
    { id: 2, categorie: 'Natation', nom: 'Lunettes de natation', texte: 'Vision claire et étanchéité sur toute la distance.', image: '/images/lunettes.jpg' },
    { id: 3, categorie: 'Vélo', nom: 'Vélo de route', texte: 'Léger et aérodynamique, avec prolongateurs.', image: '/images/velo-route.jpg' },
    { id: 4, categorie: 'Vélo', nom: 'Casque', texte: 'Obligatoire sur toute la partie vélo.', image: '/images/casque.jpg' },
    { id: 5, categorie: 'Vélo', nom: 'Pédales automatiques', texte: 'Pied solidaire de la pédale, meilleur transfert de puissance.', image: '/images/pedales.jpg' },
    { id: 6, categorie: 'Vélo', nom: 'Chaussures de vélo', texte: 'Semelle rigide compatible avec les cales.', image: '/images/chaussures-velo.jpg' },
    { id: 7, categorie: 'Course', nom: 'Chaussures de course', texte: 'Amorties pour enchaîner après le vélo.', image: '/images/chaussures.jpg' },
    { id: 8, categorie: 'Accessoire', nom: 'Montre GPS', texte: 'Allure, distance et temps de chaque segment.', image: '/images/montre.jpg' },
    { id: 9, categorie: 'Nutrition', nom: 'Gels énergétiques', texte: "Des glucides rapides à avaler pendant l'effort.", image: '/images/gels.jpg' }
  ])

  const categories = computed(() => [...new Set(objets.value.map((objet) => objet.categorie))])

  function ajouter(objet) {
    objets.value.push({ id: Date.now(), image: '', ...objet })
  }

  return { objets, categories, ajouter }
})
