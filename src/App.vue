<template>
  <div id="app">
    <v-app>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col>
            <h1 class="app__heading">Show me what ToDo 😎</h1>
            <Todo />
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Todo from "./components/Todo";
import todos from "./data/todos";
import { saveToLocalStorage, getFromLocalStorage } from "./utils";
export default {
  name: "App",
  components: {
    Todo,
  },
  created() {
    // Initialize TODOs when the app first started
    // Save initial data into localstorage
    if (!getFromLocalStorage("todos")) {
      saveToLocalStorage("todos", todos);
    }
  },
};
</script>

<style>
#app {
  background-color: #9fa8da;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.app__heading {
  font-family: "Lobster", cursive;
  text-align: center;
  margin-bottom: 42px;
}
</style>
