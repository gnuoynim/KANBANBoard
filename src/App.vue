<template>
  <div class="todo">
    <div class="todoList">
      <h2>TodoList (오늘 해야할일 목록) <p>일정갯수{{ todoStore.todoList.length }}</p>
        <div class="totalTime">
          <span>총 예상 시간: {{ totalTime }}</span>
        </div>
      </h2>
      <p>오늘 해야할 일과 예상시간을 함께 작성해보세요</p>
      <div class="inputBox">
        todoList : <input ref="todoInput" type="text" placeholder="오늘 할일은 무엇입니까?" />
        <Time />
        <button type="submit" @click="() => addTodo(todoInput)">저장</button>
      </div>
      <Modal v-if="modal" :modal="modal" :clickValue="clickValue" :todoStore="todoStore" :selected="selected"
        @closeModal="(selected) => { modal = false; }" />
      <ul>
        <li v-for="(list, index) in  todoStore.todoList " :key="list">
          <input type="checkBox" />
          <span>일정추가:{{ list }} ,</span><span>예상 시간 : {{ list.time }}</span>
          <div>
            <button type="button" @click="clickValue = index; modal = true">자세한 일정추가</button>
            <button type="button" @click=" deleteTodo(index)">일정삭제</button>
          </div>
        </li>
      </ul>
      {{ todoStore.todoList }}, {{ todoStore.doingList }},{{ todoStore.doneList }},{{ todoStore.detailList }}
    </div>
    <DoingItem :todoStore="todoStore" class="items" :clickValue="clickValue" />
    <DoneItem :todoStore="todoStore" class="itemsYellow" :clickValue="clickValue" />
  </div>
</template>

<script setup>

import { ref, computed, watchEffect } from 'vue'
import { useTodoStore } from './store/todo.js'
import Modal from './components/Modal.vue'
import Time from './components/Time.vue'
import DoingItem from './components/DoingItem.vue'
import DoneItem from './components/DoneItem.vue'


const todoStore = useTodoStore();
const modal = ref(false);
const clickValue = ref(0); // 클릭한값
const todoInput = ref(null);
const selected = ref('');


const addTodo = (inputElement) => {
  if (!inputElement.value.trim()) {
    alert('오늘 할일을 우선 작성해주세요');
    return;
  }
  const newItem = {
    text: inputElement.value,
    time: new Date().toISOString(), // ISO 형식의 문자열로 변경
    id: Date.now().toString(), // 문자열로 변경
    option: selected.value
  };

  if (selected.value) {
    newItem.option = selected.value;
  }
  console.log( selected.value)
  todoStore.addTodo(newItem);
  inputElement.value = '';
};

const deleteTodo = index => {
  todoStore.todoList.splice(index, 1);
}
const totalTime = computed(() => {
  let totalHours = 0;
  let totalMinutes = 0;
  todoStore.todoList.forEach((item) => {
    if (item.time) {
      const timeComponents = item.time.split('T')[1].split(':');
      const hours = parseInt(timeComponents[0]);
      const minutes = parseInt(timeComponents[1]);
      totalHours += hours;
      totalMinutes += minutes;
    }
  });
  totalHours += Math.floor(totalMinutes / 60);
  totalMinutes %= 60;
  return `${totalHours}시간 ${totalMinutes}분`;
});

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

        &:hover {
          background-color: #abdafff3;
        }

        input[type="checkbox"]:checked+span {
          text-decoration: line-through;
        }

      }
    }
  }
}

button {
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