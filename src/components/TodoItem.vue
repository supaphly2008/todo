<template>
  <div class="todoItem">
    <p>{{ todo.title }}</p>
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
  }
};
</script>