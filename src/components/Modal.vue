<template>
  <div class="modal" v-if="modal == true">
    <div class="modalContainer">
      <div class="addList">
        <ul>
          <li>
            <p>현재일정 : {{ todoStore.todoList[push] }}</p>
          </li>
        </ul>
      </div>
      <input type="text" @keyup.enter="addDetail" />
      <div class="selectBox">
        일정을 선택하세요: {{ selected }}
        <select v-model="selected">
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </select>
      </div>
      <div>
        <ul>
          <li v-for=" (detail, index) in detailTodo.detailList" :key="index">
            {{ detail }}
        
            selected:{{ selected }}
          </li>
        </ul>
      </div>
  
      <button type="button" @click="$emit('closeModal')">close</button>
      <button type="button" @click="$emit('closeModal'); $emit('selected',selected)">일정추가 완료</button>
  
    </div>
  </div>
</template>


<script setup>

import { ref } from 'vue'
import { useDetailStore } from '../store/detailTodo.js'
import { useTodoStore } from '../store/todo';

const selected = ref('option1');
const detailTodo = useDetailStore();
const todoStore = useTodoStore();
const addDetail = event => {
  detailTodo.detailList.push(event.target.value);
  detailTodo.todoOption.push(selected)
}


const props = defineProps({
  modal: Boolean,
  push: Number,
  todoStore: Object
})


</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.685);

  .modalContainer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 400px;
    height: 300px;
    background-color: #fff;

    .title {
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>