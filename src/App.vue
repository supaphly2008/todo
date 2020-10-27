<template>
  <div id="app">
    <v-app>
      <!-- <v-main>
        <Todo />
      </v-main> -->
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col>
            <Todo />
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Todo from "./components/Todo";
export default {
  name: "App",
  components: {
    Todo
  }
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
</style>
