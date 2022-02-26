<template>
  <ul
    v-if="todos.length > 0"
    class="border border-teal-500/60 rounded max-w-xl m-auto bg-gray-800 mt-6 w-full"
  >
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="p-4 border-b-1 border-teal-500/30 last:border-0 flex flex-row items-center space-x-4 hover:(bg-teal-500/30 cursor-pointer)"
      @click="$emit('toogle', todo)"
    >
      <span v-if="todo.done" class="h-4 w-4 bg-teal-500 rounded transform rotate-45" />
      <span v-else class="h-4 w-4 rounded transform rotate-45 bg-gray-500" />
      <div>
        <div>{{ todo.name }}</div>
        <div class="text-xs text-white/25">
          {{ todo.close_at }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{ todos: ITodo[] }>()
defineEmits(['toogle'])
</script>

<style lang="scss" scoped></style>
