<template>
  <div>
    todo-list
    <item></item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  components:{
    Item
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>