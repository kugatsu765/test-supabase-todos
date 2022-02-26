<template>
  <div class="max-w-xl m-auto flex flex-col space-y-4 items">
    <h1>My todos:</h1>
    <FormCreateTodo @submited="getMyTodos()" />

    <h2>En cours</h2>
    <ViewTodos :todos="running" @toogle="toogleTodo" />

    <h2>Done</h2>
    <ViewTodos :todos="dones" @toogle="toogleTodo" />
  </div>
</template>

<script lang="ts" setup>
const { running, dones, toogleTodo, getMyTodos } = useTodos()
getMyTodos()
</script>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
</route>
