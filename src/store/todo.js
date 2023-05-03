import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    todoOption: '',
    todoTime :['']
  }),
  getters: {

  },
  actions: {
    addTodo() {
      this.todoStore.push(item)
      
    },
   
  }
})