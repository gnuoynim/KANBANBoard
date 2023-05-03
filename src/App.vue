<template>
  <div>
    <h1>KANBAN Borad Today</h1>
  </div>
  <div class="todo">
    <div class="todoList">
      <h2>TodoList (오늘 해야할일 목록)</h2>
      <p>일정갯수{{ todoStore.todoList.length }}</p>
      <div class="inputBox">
        todo : <input type="text" placeholder="오늘 할일은 무엇입니까?" @keyup.enter="addTodo" />
        <Time />
      </div>
      <ul>
        <li v-for="(list, index) in  todoStore.todoList  " :key="list">
          <input type="checkBox" />todo : {{ list }}
          <button type="button" @click="push = index; modal = true">자세한 일정추가{{ modal }}</button>
          <button type="button">일정삭제</button>
        </li>
      </ul>
      todoStore: {{ todoStore }} {{ detailTodo }}
      <Modal :modal=" modal " :push=" push " :todoStore=" todoStore " @closeModal=" modal = false, selected " />
    </div>
    <div class="items">
      <h2>해야할일중 남은일 : 갯수{{ detailTodo.boards.length }}</h2>
      <ul>
        <li v-for="(   item, i   ) in   detailTodo.boards " :key=" i ">
          <input type="checkbox">{{ item }}
        </li>
      </ul>
    </div>
    <div class="itemsYellow">
      <h2>해야할일중 끝낸일 : 갯수{{ detailTodo.boardSelect.length }}</h2>
      <ul>
        <li v-for="(  item, i  ) in   detailTodo.boardSelect   ">
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
const state = reactive({
  newTodo: '',
  todos: []
})


const addTodo = event => {
  todoStore.todoList.push(event.target.value);
  if (state.newTodo.trim()) {
    state.todos.push({
      id: Date.now(),
      name: state.newTodo,
      time: 0,
      start: '',
      end: ''
    })
    state.newTodo = '';
  }
  event.target.value = '';
};

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
      }
    }
  }
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
  }
}

.inputBox {
  padding: 20px;
  background-color: #e4e0f5;
  display: flex;
  align-items: center;
  input {
    height: 100%;
  }
}
</style>