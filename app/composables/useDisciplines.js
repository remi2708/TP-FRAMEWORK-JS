const disciplines = [
  {
    slug: 'natation',
    nom: 'Natation',
    couleur: '#0077b6',
    resume: 'Le départ de la course, en eau libre.',
    image: '/images/combinaison.jpg',
    credit: 'US Navy, domaine public',
    description: [
      "La natation sportive consiste à parcourir dans une piscine ou en eau libre (espace naturel comme mer, rivière, lac, ...), le plus rapidement possible et dans un style codifié par la World Aquatics, une distance donnée, sans l'aide d'aucun accessoire.",
      "La natation pratiquée en lac, rivière ou mer, généralement sur des distances plus grandes (quelques kilomètres) s'appelle « nage en eau libre » ; une épreuve de 10 km en eau libre figure au programme des Jeux olympiques d'été depuis 2008."
    ],
    triathlon: "En triathlon, la natation ouvre la course, en eau libre : de 750 m (sprint) à 3,8 km (Ironman).",
    source: { titre: 'Natation sportive', url: 'https://fr.wikipedia.org/wiki/Natation_sportive' }
  },
  {
    slug: 'velo',
    nom: 'Vélo',
    couleur: '#2a9d8f',
    resume: 'La plus longue partie, sur route.',
    image: '/images/velo-route.jpg',
    credit: 'GS, CC BY-SA 4.0',
    description: [
      "Le cyclisme sur route est un sport, une des disciplines du cyclisme. Il est disputé au niveau amateur mais aussi professionnel dans de nombreux pays. Les participants, cyclistes ou coureurs cyclistes disputent des compétitions sur route. Ce sport est proche du cyclisme sur piste ou du cyclo-cross les compétiteurs pouvant parfois être les mêmes. Le cyclisme sur route est un sport très exigeant qui est à distinguer du cyclotourisme, sport amateur dans lequel le loisir et le tourisme sont privilégiés.",
      "Sport d'équipe à classement individuel, le cyclisme sur route est affaire d'endurance et de tactique. Il est indispensable de savoir s'économiser. Pour cela, les cyclistes se protègent du vent (à tour de rôle) en se plaçant les uns derrière les autres. Ils se relaient ainsi pour aller plus loin, et plus vite. Un cycliste peut par exemple préserver ses forces pendant toute la durée d'une course, parfois plus de 250 km, en vue d'un sprint final de quelques centaines de mètres."
    ],
    triathlon: 'En triathlon, le vélo est la partie la plus longue : de 20 km (sprint) à 180 km (Ironman). Le casque est obligatoire.',
    source: { titre: 'Cyclisme sur route', url: 'https://fr.wikipedia.org/wiki/Cyclisme_sur_route' }
  },
  {
    slug: 'course',
    nom: 'Course à pied',
    couleur: '#ff6b00',
    resume: 'On finit à pied, avec les jambes déjà lourdes.',
    image: '/images/course-pied.jpg',
    credit: 'NaBUru38, CC BY-SA 4.0',
    description: [
      "La course à pied est, avec la marche, l'un des deux modes de locomotion bipèdes de l'être humain. Caractérisée par une phase de suspension durant laquelle aucun des deux pieds ne touche le sol, elle permet un déplacement à des vitesses allant d'environ 6 km/h (ultrafond) à plus de 40 km/h (sprint). Outre sa fonction locomotrice, elle est principalement pratiquée comme sport dans le cadre de l'athlétisme et en tant qu'exercice physique."
    ],
    triathlon: 'En triathlon, la course à pied clôture l\'épreuve : de 5 km (sprint) à 42 km (Ironman), après la natation et le vélo.',
    source: { titre: 'Course à pied', url: 'https://fr.wikipedia.org/wiki/Course_%C3%A0_pied' }
  }
]

export function useDisciplines() {
  return disciplines
}

export function trouverDiscipline(slug) {
  return disciplines.find((discipline) => discipline.slug === slug)
}
