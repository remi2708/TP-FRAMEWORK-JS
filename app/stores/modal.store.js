export const useModalStore = defineStore('modal', () => {
  const modalActive = ref(null)

  function ouvrir(nom) {
    modalActive.value = nom
  }

  function fermer() {
    modalActive.value = null
  }

  return { modalActive, ouvrir, fermer }
})
