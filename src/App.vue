<template>
  <div>
    <h1>KANBAN Borad Today</h1>
  </div>
  <div class="todo">
    <div class="todoList">
      <p>TodoList</p>
      <p>일정갯수{{ todoStore.todoList.length }}</p>
      <div class="inputBox">
        todo : <input type="text" placeholder="오늘 할일은 무엇입니까?" @keyup.enter="addTodo" />
        <div>
          <form>
            <label for="estimatedTime">예상시간:</label>
            <input id="estimatedTime" type="time" name="estimatedTime">
          </form>
          {{ time }}
          <div class="selectBox">
            일정을 선택하세요: {{ selected }}
            <select v-model="selected">
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </select>
          </div>
        </div>
      </div>
      <ul>
        <li v-for="(list, index) in todoStore.todoList" :key="list">
          <input type="checkBox" />todo : {{ list }},{{ listIndex }}
          <button type="button" @click="">자세한 일정추가{{ modal }}</button>
          <button>일정삭제</button>
        </li>
      </ul>
      todoStore: {{ todoStore }}

      <!-- <Modal :listIndex=" listIndex"  /> -->
    </div>

    <main class="app">
      <section class="greeting">
        <h2 class="title">
          What's up, <input type="text" id="name" placeholder="Name here" v-model="name">
        </h2>
      </section>
      <section class="create-todo">
        <h3>TODO</h3>
        <form id="new-todo-form" @submit.prevent="addTodos">
          <input type="text" name="content" id="content" placeholder="list" v-model="input_content" />
          <h4>category</h4>
          <div class="options">
            <label>
              <input type="radio" name="category" id="category1" value="business" v-model="input_category" />
              <span class="bubble business"></span>
              <div>a</div>
            </label>
            <label>
              <input type="radio" name="category" id="category2" value="personal" v-model="input_category" />
              <span class="bubble personal"></span>
              <div>b</div>
            </label>
          </div>
          <input type="submit" value="Add todo" />
        </form>
      </section>
      <section class="todo-list">
        <h3>TODO LIST</h3>
        <div class="list" id="todo-list">
          <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
            <label>
              <input type="checkbox" v-model="todo.done" />
              <span :class="`bubble ${todo.category == 'a'
                  ? 'a'
                  : 'b'
                }`"></span>
            </label>
            <div class="todo-content">
              <input type="text" v-model="todo.content" />
            </div>
            <div class="actions">
              <button class="delete" @click="removeTodo(todo)">Delete</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useTodoStore } from './store/todo.js'
import Modal from './components/Modal.vue'

const todoStore = useTodoStore()
const modal = ref(false)
const selected = ref('option1')
const listIndex = ref(0)
const time = ref(0)
const todos = ref([]);
const name = ref('');
const input_content = ref('')
const input_category = ref(null)
const addTodo = event => {
  todoStore.todoList.push(event.target.value);
  todoStore.todoOption.push(selected);
};
const todos_asc = computed(() => todos.value.sort((a, b) => {
  return b.createdAt - a.createdAt
}))
watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})
watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, {
  deep: true
})
const addTodos = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    return
  }
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    editable: false,
    createdAt: new Date().getTime()
  })
}
const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo)
}
onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

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