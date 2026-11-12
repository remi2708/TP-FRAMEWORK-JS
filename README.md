# Triathlon

Projet du cours Framework JS (B2), avec Nuxt 4 et Pinia.

## Lancer le projet

```bash
npm install
npm run dev
```

## Architecture (atomic design)

| Dossier | Rôle | Exemples |
|---|---|---|
| `app/atomes` | plus petits éléments, sans logique métier | `Bouton`, `ChampTexte`, `Badge` |
| `app/molecules` | assemblage d'atomes, reçoit des props et émet des événements | `ChampFormulaire`, `ModalBase`, `MaterielCarte` |
| `app/organismes` | blocs complets, peuvent lire les stores | `EnTete`, `ModalCreate`, `ModalManager` |
| `app/templates` | mise en page commune | `MainTemplate` |
| `app/pages` | une par route, assemblent les organismes et leur passent les données | `materiel.vue`, `profil.vue` |
| `app/stores` | état partagé (Pinia) | `user`, `materiel`, `modal` |
| `app/composables` | données et logique réutilisables | `useDisciplines`, `useDistances` |
| `app/plugins` | appels API centralisés | `meteoAPI.js` (Open-Meteo) |

## Modals

1. `modal.store.js` retient la modal ouverte : `ouvrir('create')`, `fermer()`.
2. `ModalManager`, placé une fois dans `MainTemplate`, affiche la modal active dans `<body>` avec `<Teleport>`.
3. `ModalBase` fournit le fond, le titre et la fermeture (bouton, clic sur le fond, touche Échap).
4. `ModalCreate` contient le formulaire et émet `fermer`.

Ajouter une modal : créer `ModalXxx.vue` dans `organismes`, l'importer dans `ModalManager`, puis l'ouvrir avec `modalStore.ouvrir('xxx')`.
