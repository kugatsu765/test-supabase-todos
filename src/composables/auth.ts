import { useUserStore } from '~/stores/user'
import { signInWithMail, signOut } from '~/api'

export function useAuth() {
  const userS = useUserStore()
  const router = useRouter()

  const signInHandler = async(values: { login: string; password: string }) => {
    try {
      const payload = { email: values.login, password: values.password }
      const user = await signInWithMail(payload)
      userS.user = user
      router.push('/')
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  const signOutHandler = async() => {
    await signOut()
    userS.reset()
    router.push('/login')
  }

  const signUpHandler = async() => {

  }

  return { signInHandler, signUpHandler, signOutHandler }
}
