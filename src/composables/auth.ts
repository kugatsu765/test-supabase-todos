import { useUserStore } from '~/stores/user'
import { signInWithMail, signOut, signUpWithMail } from '~/api'

interface ILogin { login: string; password: string }

export function useAuth() {
  const userS = useUserStore()
  const router = useRouter()

  const signInHandler = async(values: ILogin) => {
    try {
      const payload = { email: values.login, password: values.password }
      const user = await signInWithMail(payload)
      userS.user = user
      router.push('/')
    }
    catch (error: any) {
      alert(error?.message)
    }
  }

  const signOutHandler = async() => {
    await signOut()
    userS.reset()
    router.push('/login')
  }

  const signUpHandler = async(values: ILogin) => {
    try {
      const payload = { email: values.login, password: values.password }
      const user = await signUpWithMail(payload)
      userS.user = user
      router.push('/')
    }
    catch (error: any) {
      alert(error?.message)
    }
  }

  return { signInHandler, signUpHandler, signOutHandler }
}
