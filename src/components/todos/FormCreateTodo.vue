<template>
  <div>
    <form class="flex flex-row space-x-4" @submit="onSubmit">
      <input
        id="name"
        v-model="name"
        name="name"
        placeholder="Créer une tâche"
        autocomplete="off"
        class="w-full"
      >
      <button :disabled="!!errors.name">
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const emit = defineEmits(['submited'])

const { createTodo } = useTodos()

const schema = yup.object({
  name: yup.string().required(),
})

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
})

const { value: name } = useField('name')

const onSubmit = handleSubmit(async(values) => {
  await createTodo(values as { name: string })
  emit('submited', values)
})
</script>
