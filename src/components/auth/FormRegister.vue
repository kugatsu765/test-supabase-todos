<template>
  <form
    class="max-w-lg bg-gray-800 m-auto rounded flex flex-col space-y-6 py-10 px-8 shadow py-20 px-10 border-l-4 border-teal-500"
    @submit.prevent="submit"
  >
    <h1 class="font-bold m-0">
      Create account !
    </h1>

    <input id="login" v-model="forms.login" name="login" placeholder="Your Mail" autocomplete="off">

    <input
      id="login"
      v-model="forms.password"
      name="login"
      type="password"
      placeholder="Password"
      autocomplete="off"
    >

    <input
      id="login"
      v-model="forms.passwordConfirme"
      name="login"
      type="password"
      placeholder="Confirm your Password"
      autocomplete="off"
    >

    <div
      v-if="forms.password !== forms.passwordConfirme"
      text-red-500
    >
      Both password & confirm password must be the same
    </div>

    <button class="btn-primary">
      Register
    </button>
  </form>
</template>

<script lang="ts" setup>
interface IRegister {
  login: string
  password: string
  passwordConfirme: string
}

const emit = defineEmits<{
  (e: 'afterSubmit', register: IRegister): void
}>()

const forms = reactive<IRegister>({
  login: '',
  password: '',
  passwordConfirme: '',
})

const submit = () => {
  if (forms.password === forms.passwordConfirme)
    emit('afterSubmit', forms)
}
</script>
