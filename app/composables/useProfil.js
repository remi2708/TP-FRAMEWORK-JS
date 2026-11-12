export function useProfil() {
  const userStore = useUserStore()

  const nomComplet = computed(() => {
    const user = userStore.connectedUser
    return user ? `${user.prenom} ${user.nom}` : ''
  })
  const email = computed(() => userStore.connectedUser?.email ?? '')

  return { nomComplet, email }
}
