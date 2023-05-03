<template>
  <div>
    <h1>KANBAN Borad Today</h1>
  </div>
  <div class="todo">
    <div class="todoList">
      <h2>TodoList (오늘 해야할일 목록) <p>일정갯수{{ todoStore.todoList.length }}</p></h2>
      <p>오늘 해야할 일과 예상시간을 함께 작성해보세요</p>
      <div class="inputBox">
        todo : <input type="text" placeholder="오늘 할일은 무엇입니까?" @keyup.enter="addTodo" />
        <Time />
      </div>
      <ul>
        <li v-for="(list, index) in   todoStore.todoList   " :key="list">
          <input type="checkBox" /><span>{{ list }}</span> 
          <button type="button" @click="push = index; modal = true">자세한 일정추가</button>
          <button type="button" @click="deleteTodo(index)">일정삭제</button>
        </li>
      </ul>
      <Modal :modal=" modal " :push=" push " :todoStore=" todoStore " @closeModal=" modal = false, selected " />
    </div>
    <div class="items">
      <h2>해야할일중 남은일 : 갯수{{ detailTodo.boards.length }}</h2>
      <ul>
        <li v-for="( item, i ) in detailTodo.boards  " :key=" i ">
          <input type="checkbox">{{ item }}
        </li>
      </ul>
    </div>
    <div class="itemsYellow">
      <h2>해야할일중 끝낸일 : 갯수{{ detailTodo.boardSelect.length }}</h2>
      <ul>
        <li v-for="(   item, i   ) in    detailTodo.boardSelect    ">
          <input type="checkbox">{{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useTodoStore } from './store/todo.js'
import Modal from './components/Modal.vue'
import { useDetailStore } from './store/detailTodo.js'
import Time from './components/Time.vue'

const todoStore = useTodoStore();
const modal = ref(false); //모달창
const push = ref(0); // 클릭한값
const detailTodo = useDetailStore();


const addTodo = event => {
  todoStore.todoList.push(event.target.value);

  event.target.value = '';
};
const deleteTodo = index => {
  todoStore.todoList.splice(index, 1);
}
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 5%;

  .todoList {
    background-color: red;
    height: 100%;

    p {
      color: #fff;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0;
        background-color: #fff;
        padding: 20px;
        margin: 30px;
        &:hover{
          background-color: #e9c7f7;
        }
        input[type="checkbox"]:checked + span{
          background-color: #0083ff;
        }

      }
    }
  }
}
button{
  cursor: pointer;
}
.items {
  background-color: #0083ff;

  ul {
    margin: 20px;
    padding: 0;
  }

  li {
    list-style: none;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
  }
}

.itemsYellow {
  background-color: #ffab00;

  ul {
    margin: 20px;
    padding: 0;
  }

  li {
    list-style: none;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;

  }
}

.inputBox {
  padding: 20px;
  background-color: #ff7b7b;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  input {
    height: 100%;
  }
}
</style>