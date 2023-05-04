<template>
  <div>
    <h2>Doing Item</h2>
    <div class="items">
      <h2>해야할일중 남은일 : 갯수{{ detailTodo.boards.length }}</h2>
      <ul>
        <li v-for="(  item, i  ) in  detailTodo.boards  " :key="i">
          <input type="checkbox">{{ item.text }}
          <button @click="moveItem(item, 'boards', 'boardSelect')">완료</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>