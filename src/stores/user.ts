import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = useStorage('my-user', undefined, undefined,
    {
      serializer: {
        read: (v: any) => v ? JSON.parse(v) : null,
        write: (v: any) => JSON.stringify(v),
      },
    })
  const isAdmin = ref(false)
  const isLogged = computed(() => !!user.value)

  const reset = () => {
    user.value = undefined
  }

  return {
    user,
    isAdmin,
    isLogged,
    reset,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
