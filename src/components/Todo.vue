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
      <TodoItem
        @click.native="editTodo(todo)"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </v-list>
    <Modal
      v-if="dialog"
      :modalType="modalType"
      :todo="todo"
      :dialog="dialog"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import Modal from "./Modal";

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
    addTodo() {
      this.openModal();
      this.modalType = MODAL_TYPE.ADD;
      this.todo = {};
    },
    editTodo(todo) {
      this.openModal();
      this.modalType = MODAL_TYPE.EDIT;
      this.todo = todo;
    },
    closeModal() {
      this.dialog = false;
    },
    openModal() {
      this.dialog = true;
    },
  },
  created() {
    // fetch todos from localstorage
    this.todos = JSON.parse(localStorage.todos);
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
