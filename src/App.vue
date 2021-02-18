<template>
  <div>
    <todo-list></todo-list>
    <todo-input></todo-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from './components/TodoList/index.vue'
import TodoInput from './components/TodoInput/index.vue'

export default defineComponent({
  name: 'App',
  components:{
    TodoList,
    TodoInput
  }
})
</script>

<style>

</style>