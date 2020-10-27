<template>
  <div class="todoItem px-4 py-2 d-flex justify-space-between align-center">
    <p>{{ todo.title }}</p>
    <v-btn @click="addTodo" icon color="pink">
      <v-icon>fas fa-trash-alt</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      title: String,
      id: String,
      isDone: Boolean
    }
  }
};
</script>