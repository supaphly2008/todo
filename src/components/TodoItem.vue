<template>
  <div>
    <v-list-item :link="!todo.isDone">
      <v-list-item-content>
        <v-list-item-title :class="todoDone">{{
          todo.title
        }}</v-list-item-title>
        <v-list-item-subtitle :class="todoDone">{{
          createdTime
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-icon>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click.stop="completeTodo(todo)"
              icon
              :color="todo.isDone ? 'green' : 'grey'"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>fas fa-check-circle</v-icon>
            </v-btn>
          </template>
          <span>Mark done</span>
        </v-tooltip>
      </v-list-item-icon>
      <v-list-item-icon>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click.stop="deleteTodo(todo)"
              icon
              color="pink"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>fas fa-trash-alt</v-icon>
            </v-btn>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </v-list-item-icon>
    </v-list-item>
    <v-divider divider v-if="!endOfTodo" />
  </div>
</template>

<script>
import { formatDateTime } from "../utils";
export default {
  props: {
    todo: {
      title: String,
      id: String,
      isDone: Boolean,
      createdTime: Date,
    },
    todoIndex: Number,
    todoTotal: Number,
  },
  computed: {
    createdTime() {
      return formatDateTime(new Date(this.todo.createdTime));
    },
    endOfTodo() {
      return this.todoIndex === this.todoTotal - 1;
    },
    todoDone() {
      return this.todo.isDone ? "text-decoration-line-through" : "";
    },
  },
  methods: {
    completeTodo(todo) {
      this.$emit("completeTodo", todo);
    },
    deleteTodo(todo) {
      this.$emit("deleteTodo", todo);
    },
  },
};
</script>
