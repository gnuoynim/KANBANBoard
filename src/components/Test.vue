<template>
  <div class="todo-list">
    <h2>Todos:</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <span @click="toggleTodo(todo)">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>
    <div>
      <input type="text" v-model="newTodoText">
      <button @click="addTodo">Add Todo</button>
    </div>
  </div>
</template>

<script setup>
import {useTodoKanbanStore} from '../store/kanban.js'
import {ref} from 'vue'
const store = useTodoKanbanStore()

const todos = store.todos
const addTodo  = () => {
  store.addTodo (newTodoText)
  newTodoText.value = ''
}
const toggleTodo = store.toggleTodo
const removeTodo = store.removeTodo

const newTodoText = ref('')
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>