<template>
  <div class="todo">
    <div
      class="todo__header indigo d-flex justify-space-between align-center px-4"
    >
      <h2 class="todo__heading">My ToDo List</h2>
      <v-btn @click="addTodo" icon color="white">
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
    </div>
    <div class="todo__todo-none" v-if="todos.length === 0">
      <p>You do not have any todos</p>
    </div>
    <v-list>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </v-list>
    <Modal :dialog="dialog" @closeModal="closeModal" />
  </div>
</template>

<script>
// import Item from "./Item";
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
    Modal,
    TodoItem
  },
  methods: {
    addTodo() {
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    },
    selectedTodo() {
      alert("hello");
      console.log("hello");
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  &__header {
    border-radius: 5px 5px 0 0;
    /* background-color: teal; */
    height: 60px;
    width: 100%;
  }
  &__heading {
    font-family: "Lobster", cursive;
    color: #fff;
    font-weight: normal;
  }

  &__todo-none {
    padding: 10px;
  }
}
</style>
