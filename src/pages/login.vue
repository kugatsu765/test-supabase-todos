<template>
  <div class="pt-64">
    <FormLogin @after-submit="signInHandler" />
    <div text-center>
      <router-link to="/register">
        create an account !
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { signInHandler } = useAuth()
</script>
