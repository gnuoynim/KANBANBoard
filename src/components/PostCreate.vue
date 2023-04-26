<template>
  <div>
    <p>PostComponet</p>
    <div>
      <select v-model="type">
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps();
defineEmits()
const type = ref('')
const typeSelect = () =>{
  type : type.value
}
console.log(type.value)
</script>

<style lang="scss" scoped></style>