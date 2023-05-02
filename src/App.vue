<template>
  <div>
    <h1>KANBAN Borad Today</h1>
  </div>
  <div class="todo">
    <div class="todoList">
      <h2>TodoList</h2>
      <p>일정갯수{{ todoStore.todoList.length }}</p>
      <div class="inputBox">
        todo : <input type="text" placeholder="오늘 할일은 무엇입니까?" @keyup.enter="addTodo" />
        <div>
          <Time/>
          <form>
            <label for="estimatedTime">예상시간:</label>
            <input id="estimatedTime" type="time" name="estimatedTime">
          </form>
        </div>
      </div>
      <ul>
        <li v-for="(list, index) in  todoStore.todoList " :key="list">
          <input type="checkBox" />todo : {{ list }},{{ index }}
          <button type="button" @click="push = index; modal = true">자세한 일정추가{{ modal }}</button>
          <button>일정삭제</button>
          <ul>
            <li v-for=" (detail, index) in detailTodo.detailList" :key="index">
            {{ detail }}
          </li>
          </ul>
        </li>
      </ul>
      todoStore: {{ todoStore }}   {{ detailTodo }}
      <Modal :modal=" modal " :push=" push " :todoStore=" todoStore " @closeModal="modal=false,  selected" />
    </div>
    <Test/>
    <div v-for="(item, i) in detailTodo.todoOption">
      {{ item }}
    </div>

    <PostCreate />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useTodoStore } from './store/todo.js'
import Modal from './components/Modal.vue'
import PostCreate from './components/PostCreate.vue'
import { useDetailStore } from './store/detailTodo.js'
import Time from './components/Time.vue'
import Test from './components/Test.vue'

const todoStore = useTodoStore();
const modal = ref(false); //모달창
const push = ref(0); // 클릭한값
const todos = ref([]);
const name = ref('');
const input_content = ref('');
const input_category = ref(null);
const detailTodo = useDetailStore();


const addTodo = event => {
  todoStore.todoList.push(event.target.value);
};


// const todos_asc = computed(() => todos.value.sort((a, b) => {
//   return b.createdAt - a.createdAt
// }))
// watch(name, (newVal) => {
//   localStorage.setItem('name', newVal)
// })
// watch(todos, (newVal) => {
//   localStorage.setItem('todos', JSON.stringify(newVal))
// }, {
//   deep: true
// })
// const addTodos = () => {
//   if (input_content.value.trim() === '' || input_category.value === null) {
//     return
//   }
//   todos.value.push({
//     content: input_content.value,
//     category: input_category.value,
//     done: false,
//     editable: false,
//     createdAt: new Date().getTime()
//   })
// }
// const removeTodo = (todo) => {
//   todos.value = todos.value.filter((t) => t !== todo)
// }
// onMounted(() => {
//   name.value = localStorage.getItem('name') || ''
//   todos.value = JSON.parse(localStorage.getItem('todos')) || []
// })

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

.inputBox {
  background-color: antiquewhite;
}
</style>