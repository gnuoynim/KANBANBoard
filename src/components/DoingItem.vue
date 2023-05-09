<template>
  <div>
    <h2>Doing Item</h2>
    <div class="items">
      <h2>해야할일중 남은일 : 갯수{{ todoStore.doingList.length }}</h2>
      <ul>
        <li v-for="(item, index) in todoStore.doingList" :key="index">
          {{ item }}
          <div><button type="button" @click="openModal(index)">자세한 일정추가</button></div>
        </li>
      </ul>
      <Modal v-if="modal" @closeModal="closeModal" :todoStore="todoStore" :clickValue="clickValue.valueOf" :modal="modal" />
    </div>
  </div>
</template>

<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue';
const modal = ref(false);
const clickValue = ref(0); 

const openModal = (index) => {
  clickValue.value = index;
  modal.value = true;
};
const closeModal = () => {
  modal.value = false;
};
import { defineProps } from 'vue';

const props = defineProps({
  todoStore: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>