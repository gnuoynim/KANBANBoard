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


const type = ref('option1')
const step = ref(0)

</script>

<style lang="scss" scoped></style>