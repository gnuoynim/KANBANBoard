<template>
  <div class="modal" v-if="modal == true">
    <div class="modalContainer">
      <div class="addList">
        <button type="button" @click.stop="$emit('closeModal')" class="closeButton">X</button>
        <p class="title">현재일정 :<span>{{ todoStore.todoList[push].text }}</span></p>
        <div class="selectBox">
          일정을 자세히 나눠보세요: {{ selected }}
          <select v-model="selected" @change="setSelected">
            <option v-for="(option, index) in todoStore.typeOption" :key="index">
              {{ Object.keys(option)[0] }}
            </option>
          </select>
        </div>
        <input type="text" ref="detailInput" @keyup.enter.stop.prevent="addDetail" placeholder="일정을 자세하게 작성해보세요" />
      </div>
      <div>
        <ul>
          <li v-for=" (detail, index) in todoStore.detailList" :key="index">
            <input type="checkbox"/>{{ detail.detail }} {{ detail.id }}
          </li>
        </ul>
      </div>
      <button type="button" @click.stop="$emit('closeModal'); $emit('selected', selected); todoStore.detailList = []"
        class="addButton">일정추가 완료</button>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useTodoStore } from '../store/todo';

const selected = ref('doing');
const todoStore = useTodoStore();
const detailInput = ref(null)

const addDetail = (event) => {
  event.stopPropagation();
  const detailText = {
    id: props.push,
    detail: event.target.value,
  }
  todoStore.addTodoDetail(detailText);
  event.target.value =''
};

const setSelected = event => {
  todoStore.setSelected(event.target.value);
};

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
    width: 500px;
    height: 440px;
    background-color: #fff;
    border-radius: 20px;

    .title {
      text-align: center;
      font-size: 20px;

      span {
        border-bottom: 3px solid rgb(21, 209, 115);
      }
    }
  }
}

.closeButton {
  float: right;
  width: 30px;
  height: 30px;
  padding: 0;
  margin-right: 10px;
  cursor: pointer;
}

.addButton {
  width: 50%;
  line-height: 30px;
  background-color: #266dff;
  border: 0;
  border-radius: 5px;
  color: #fff;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.addList {
  input {
    width: 80%;
  }
}
</style>