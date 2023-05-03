<template>
  <div>
    <div class="timeTable">
      <p>일정 예상 걸리는 시간</p>
      <div>
        <label>시작 시간:</label>
        <input type="time" v-model="start">
      </div>
      <div>
        <label>종료 시간:</label>
        <input type="time" v-model="end" @change="calculate">
      </div>
      <div>
        <label>예상시간:</label>
        <span>{{ total }}</span>
      </div>
    </div>
  </div>
  {{ todoStore.todoTime }}
</template>

<script setup>

import moment from 'moment';
import { ref } from 'vue'
import { useTodoStore } from '../store/todo';

const todoStore = useTodoStore();
let start = ref('');
let end = ref('');
let total = ref('');
let time = ref(0)

const calculate = (event) => {
  const startTime = moment(start.value, 'HH:mm');
  const endTime = moment(end.value, 'HH:mm');
  const duration = moment.duration(endTime.diff(startTime));
  const hours = duration.hours();
  const minutes = duration.minutes();
  total.value = `${hours}시간 ${minutes}분`;
  console.log(total.value)

}


</script>

<style lang="scss" scoped>
.timeTable {
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #ff0000;
}
</style>