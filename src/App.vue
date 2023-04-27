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
            <label for="appt-time">예상시간:</label>
            <input id="appt-time" type="time" name="appt-time">
          </form>
        </div>
        <div>일정을 선택하세요: {{ selected }}</div>
        <select v-model="selected">
          <option disabled value=""></option>
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </select>
      </div>
      <ul>
        <li v-for="(list, index) in todoStore.todoList" :key="list">
          <input type="checkBox" />todo : {{ list }}
          <button type="button" @click="modal = !modal">자세한 일정추가{{ modal }}</button>
          <button>일정삭제</button>
        </li>
      </ul>
      <div>
        todoStore: {{ todoStore }}
      </div>
    </div>
    <Modal v-if="modal == true" :modal="todoStore.todoList" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from './store/todo.js'
import Modal from './components/Modal.vue'

const todoStore = useTodoStore()

const modal = ref(false)
const selected = ref('option1')
const addTodo = event => {
  todoStore.todoList.push(event.target.value);
  todoStore.todoOption.push(selected);

};


const input = document.createElement('input');
input.type = 'time';
input.min = '23:00';
input.max = '01:00';
input.value = '23:59';

if (input.validity.valid && input.type === 'time') {

} else {

}

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
</style>