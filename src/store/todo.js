import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    todoOption: '',
  }),
  getters: {

  },
  actions: {
    addTodo() {
      this.todoStore.push(item)
    }
  }
})