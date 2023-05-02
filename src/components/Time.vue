<template>
  <div>
    <div class="container">
      <div class="form-group">
        <label>시작 시간:</label>
        <input type="time" v-model="start">
        {{ start }}
      </div>
      <div class="form-group">
        <label>종료 시간:</label>
        <input type="time" v-model="end">{{ end }}
      </div>
      <div class="form-group">
        <button @click="calculate">계산하기</button>
      </div>
      <div class="form-group">
        <label>총 시간:</label>
        <span>{{ total }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

import moment from 'moment';
import { ref } from 'vue'

let start = ref('');
let end = ref('');
let total = ref('');

const calculate = () => {
  const startTime = moment(start.value, 'HH:mm');
  const endTime = moment(end.value, 'HH:mm');
  const duration = moment.duration(endTime.diff(startTime));
  const hours = duration.hours();
  const minutes = duration.minutes();
  total.value = `${hours}시간 ${minutes}분`;
}


</script>

<style lang="scss" scoped></style>