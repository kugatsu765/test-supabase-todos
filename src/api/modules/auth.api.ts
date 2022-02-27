import { supabase } from '../supabase'

export async function signInWithMail({ email, password }: { email: string; password: string }) {
  const payload = { email, password }
  const { user, error } = await supabase.auth.signIn(payload)

  if (error) throw error
  return user
}

export async function signUpWithMail({ email, password }: { email: string; password: string }) {
  const payload = { email, password }
  const { user, error } = await supabase.auth.signUp(payload)

  if (error) throw error
  return user
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
