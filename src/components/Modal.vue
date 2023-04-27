<template>
  <div class="modal">
    <div class="modalContainer">
      <button type="button">close</button>
      <p v-for="item in modal" :key="item" class="title">{{ item }}</p>
      <button>일정추가</button>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  modal: {
    Type: String,
    default: '',
  },
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