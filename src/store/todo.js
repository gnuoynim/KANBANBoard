import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    todoOption: '',
    todoTime :''
  }),
  getters: {

  },
  actions: {
    addTodo(item) {
      const newItem = {
        text: item.text,
        time: this.todoTime
      };
      this.todoList.push(newItem);
    },
    setTodoTime(time) {
      this.todoTime = time;
    },
    
  }
})