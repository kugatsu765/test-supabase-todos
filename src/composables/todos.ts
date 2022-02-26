import { getTodos, insertTodo, updateTodo } from '~/api'
import { supabase } from '~/api/supabase'

export function useTodos() {
  const todos = ref<ITodo[]>([])

  const running = computed(() => todos.value.filter(todo => !todo.done))
  const dones = computed(() => todos.value.filter(todo => todo.done))

  const getMyTodos = async() => {
    getTodos().then((resp) => {
      todos.value = resp.data as ITodo[]
    })
  }

  const toogleTodo = async(todo: ITodo) => {
    try {
      await updateTodo(todo.id, { done: !todo.done, close_at: !todo.done ? new Date().toISOString() : null })
      todo.done = !todo.done
      todo.close_at = todo.done ? new Date().toISOString() : undefined
    }
    catch (error: any) {
      // eslint-disable-next-line no-alert
      alert(`Update err => ${error.status}`)
    }
  }

  const createTodo = async(values: { name: string }) => {
    try {
      const payload: Partial<ITodo> = {
        done: false,
        name: values.name,
        user_id: supabase.auth.user()?.id,
      }
      // eslint-disable-next-line no-console
      console.log(payload)

      insertTodo(payload)
    }
    catch (error: any) {
      // eslint-disable-next-line no-alert
      alert(`Update err => ${error.status}`)
    }
  }

  return { todos, running, dones, getMyTodos, toogleTodo, createTodo }
}
