<template>
  <div>
    <input
      type="text"
      v-model="todoValue"
      @keyup="setTodoValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const todoValue = ref<string>('')

    const setTodoValue = (e:KeyboardEvent) => {
      if(e.code === 'Enter' && todoValue.value.trim().length > 0) {
        console.log(todoValue.value)
      }
    }

    return {
      todoValue,
      setTodoValue
    }
  }
})
</script>

<style scoped>

</style>