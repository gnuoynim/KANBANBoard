<template>
  <div>
    <h1>KANBAN Borad</h1>
  </div>
  <div class="todo">
    <div class="todoList">
      <p>TodoList</p>
      <div class="inputBox">
        todo : <input type="text" placeholder="오늘 할일은 무엇입니까?" @keyup.enter="addTodo"/>
      </div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkBox"/>{{ todo }}
        </li>
      </ul>
    </div>
    <PostCreate />
    <h2> counter{{ store.counter }}</h2>
    <h2> counter{{ store.doubleCount }}</h2>
    <button @click="store.increment()">store버튼</button>
  </div>
</template>

<script setup>
import {  reactive,ref } from 'vue'
import PostCreate from './components/PostCreate.vue'
import { useCounterStore } from './store/counter';

const todos = reactive([]);
const addTodo = event => {
	todos.push(event.target.value);
	console.log(`저장되었습니다. ${todos}`);
};

const createPost =()=>{
  console.log("rr")
}

const store = useCounterStore()
</script>

<style lang="scss" scoped>
.todo {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 10%;

  .todoList {
    background-color: red;
    height: 100%;

    p {
      color: #fff;
    }
    ul{
      list-style: none;
      padding: 0;
      li{
        margin: 0;
        background-color: #fff;
        padding: 20px;
        margin: 30px;
      }
    }
  }
}
</style>