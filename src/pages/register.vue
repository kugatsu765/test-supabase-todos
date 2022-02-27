<script lang="ts" setup>
const { signUpHandler } = useAuth()
</script>

<template>
  <FormRegister @after-submit="signUpHandler" />
</template>
