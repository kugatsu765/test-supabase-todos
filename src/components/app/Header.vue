<template>
  <div
    class="px-4 py-1 bg-teal-500 text-white text-center flex flex-row items-center justify-between"
  >
    <div class="font-bold">
      Todos app + supabase
    </div>
    <div>
      <button class="btn-secondary flex flex-row items-center space-x-2" @click="signOutHandler">
        <div uim:signout />
        <div>Sign Out</div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { signOutHandler } = useAuth()
</script>

<style lang="scss" scoped></style>
