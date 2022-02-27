<template>
  <form
    class="max-w-lg bg-gray-800 m-auto rounded flex flex-col space-y-6 py-10 px-8 shadow py-20 px-10 border-l-4 border-teal-500"
    @submit.prevent="submit"
  >
    <h1 class="font-bold m-0">
      Todo's App
    </h1>

    <input id="login" v-model="login" name="login" placeholder="Your Mail" autocomplete="off">
    <input
      id="login"
      v-model="password"
      name="login"
      type="password"
      placeholder="password"
      autocomplete="off"
    >

    <button class="btn-primary">
      Submit
    </button>
  </form>
</template>

<script lang="ts" setup>

const emit = defineEmits(['afterSubmit'])

const login = ref()
const password = ref()

const submit = () => {
  emit('afterSubmit', { login: login.value, password: password.value })
}
</script>
