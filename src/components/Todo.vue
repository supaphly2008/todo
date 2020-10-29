<template>
  <div class="todo">
    <div class="todo__header indigo d-flex justify-end align-center px-4">
      <v-btn @click="addTodo" icon color="white">
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
    </div>
    <div class="todo__todo-none" v-if="todos.length === 0">
      <p>You do not have any todos</p>
    </div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <!-- modal -->
    <Modal :dialog="dialog" @closeModal="closeModal" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import todos from "../data/todos";
import Modal from "./Modal";
export default {
  data() {
    return {
      todos: [],
      dialog: false
    };
  },
  components: {
    TodoItem,
    Modal
  },
  methods: {
    addTodo() {
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    }
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
    /* background-color: teal; */
    height: 60px;
    width: 100%;
  }

  &__todo-none {
    padding: 10px;
  }
}
</style>
