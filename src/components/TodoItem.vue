<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ todo.title }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click.stop="completeTodo(todo)"
            icon
            color="green"
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
</template>

<script>
export default {
  props: {
    todo: {
      title: String,
      id: String,
      isDone: Boolean
    }
  },
  methods: {
    completeTodo(todo) {
      console.log("completeTodo", todo);
    },
    deleteTodo(todo) {
      console.log("deleteTodo", todo);
    }
  }
};
</script>
