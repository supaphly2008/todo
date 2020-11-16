<template>
  <div class="todo">
    <div
      class="todo__header indigo d-flex justify-space-between align-center px-4"
    >
      <h2 class="todo__heading">My ToDo List</h2>
      <v-btn @click="openModal('ADD')" icon color="white">
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
    </div>
    <div class="todo__todo-none" v-if="todos.length === 0">
      <p>You do not have any todos</p>
    </div>
    <v-list>
      <TodoItem
        @click.native="todo.isDone ? null : openModal('EDIT', todo)"
        @deleteTodo="deleteTodo"
        @completeTodo="completeTodo"
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :todoIndex="index"
        :todoTotal="todos.length"
      />
    </v-list>
    <Modal
      v-if="dialog"
      :modalType="modalType"
      :todo="todo"
      :dialog="dialog"
      @closeModal="closeModal"
      @saveTodo="saveTodo"
      @editTodo="editTodo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import Modal from "./Modal";
import { getFromLocalStorage, saveToLocalStorage } from "../utils";

export const MODAL_TYPE = {
  ADD: "ADD",
  EDIT: "EDIT",
};
export default {
  data() {
    return {
      todos: [],
      dialog: false,
      modalType: null,
      todo: {},
    };
  },
  components: {
    Modal,
    TodoItem,
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
    /**
     * @param type - Modal type (add or edit)
     * @param todo - Todo data
     */
    openModal(type, todo = {}) {
      this.dialog = true;
      this.modalType = type;
      this.todo = todo;
    },
    saveTodo(todo) {
      this.todos.unshift(todo);
      saveToLocalStorage("todos", this.todos);
    },
    editTodo(editTodoItem) {
      const position = this.todos.findIndex((todo) => {
        return todo.id === editTodoItem.id;
      });
      this.todos[position].title = editTodoItem.title;
      saveToLocalStorage("todos", this.todos);
    },
    deleteTodo(deletTodoItem) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== deletTodoItem.id;
      });
      saveToLocalStorage("todos", this.todos);
    },
    completeTodo(doneTodoItem) {
      const position = this.todos.findIndex((todo) => {
        return todo.id === doneTodoItem.id;
      });
      this.todos[position].isDone = !this.todos[position].isDone;
      saveToLocalStorage("todos", this.todos);
    },
  },
  created() {
    // fetch todos from localstorage
    this.todos = getFromLocalStorage("todos");
  },
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
