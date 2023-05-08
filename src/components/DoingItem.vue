<template>
  <div>
    <h2>Doing Item</h2>
    <div class="items">
      <h2>해야할일중 남은일 : 갯수{{  }}</h2>
      <ul>
        <!-- <li v-for="todoStore in todoStore" :key="todoStore">{{ todoStore }}</li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  todoStore: Object
})

</script>

<style lang="scss" scoped></style>