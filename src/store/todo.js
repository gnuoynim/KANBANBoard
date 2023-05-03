import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    todoOption: '',
    totalTime: ref(0),
  }),
  getters: {

  },
  actions: {
    addTodo() {
      this.todoStore.push(item)
      this.updateTotalTime(item.time)
    },
    updateTotalTime(time) {
      this.totalTime.value += time
    },
  }
})