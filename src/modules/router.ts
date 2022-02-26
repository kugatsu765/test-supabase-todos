import { useUserStore } from '~/stores/user'
import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to: any, from: any, next: any) => {
      const user = useUserStore()

      const authRequired = authentificationRequired(to)
      const isUserLogged = user.isLogged

      if (authRequired) {
        if (isUserLogged) {
          const userAsAccess = checkRoles(to.meta.roles)
          if (userAsAccess)
            next()
          else
            next('/')
        }
        else {
          next('/login')
        }
      }
      else if (to.name === 'auth-login' && isUserLogged) {
        next('/')
      }
      else {
        next()
      }
    })
  }
}

function authentificationRequired(to: any) {
  return to.matched.some((record: any) => record?.meta?.requiresAuth)
}

function checkRoles(routesRoles: string[]) {
  const isAdmin = useUserStore().isAdmin

  let userAccess = false

  if (
    typeof routesRoles === 'undefined'
    || routesRoles.length === 0
    || (routesRoles.includes('ADMIN') && isAdmin)
  )
    userAccess = true

  return userAccess
}
