<template>
  <div class="todoItem px-4 py-2 d-flex justify-space-between align-center">
    <p>{{ todo.title }}</p>
    <div class="d-flex justify-space-between">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Top
          </v-btn> -->
          <v-btn
            @click="addTodo"
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

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="addTodo"
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
    </div>
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
  },
  methods: {
    addTodo() {
      console.log("todo");
    }
  }
};
</script>