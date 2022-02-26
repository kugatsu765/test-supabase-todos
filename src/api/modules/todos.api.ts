import { supabase } from "../supabase";

export async function getTodos() {
    const resp = await supabase.from('todos').select('*')
    return resp
}

export async function updateTodo(idTodo, payload) {

    const { data, error, ...res } = await supabase
        .from('todos')
        .update(payload)
        .eq('id', idTodo)

    if (error) {
        throw { error, ...res }
    }
    return data
}

export async function insertTodo(payload) {

    const { data, error, ...res } = await supabase
        .from('todos')
        .insert([payload])

    if (error) {
        throw { error, ...res }
    }
    return data
}