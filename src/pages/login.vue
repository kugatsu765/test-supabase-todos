<template>
  <div class="pt-64">
    <FormLogin @after-submit="signInHandler" />
  </div>
</template>

<script lang="ts" setup>
const { signInHandler } = useAuth()
</script>
