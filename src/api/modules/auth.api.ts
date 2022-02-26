import { string } from "yup";
import { supabase } from "../supabase";

export async function signInWithMail({ email, password }: { email: string, password: string }) {
    const payload = { email: email, password: password }
    const { user, error } = await supabase.auth.signIn(payload)
    
    if (error) throw error
    return user;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}