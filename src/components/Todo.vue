<template>
  <div class="todo">
    <div class="todo__header">
      <v-btn icon color="pink">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </div>
    <div v-if="todos.length === 0" class="todo__todo-none">
      <p>You do not have any todos</p>
    </div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import todos from "../data/todos";
export default {
  data() {
    return {
      todos: []
    };
  },
  components: {
    TodoItem
  },
  created() {
    // fetch todos
    this.todos = todos;
  }
};
</script>

<style lang="scss" scoped>
.todo {
  margin: 0 auto;
  max-height: 600px;
  max-width: 600px;
  background-color: rgb(231, 231, 231);
  border-radius: 5px;

  &__header {
    border-radius: 5px 5px 0 0;
    background-color: teal;
    height: 60px;
    width: 100%;
  }

  &__todo-none {
    padding: 10px;
  }
}
</style>
