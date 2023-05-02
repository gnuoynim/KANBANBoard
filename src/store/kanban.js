import { defineStore } from 'pinia'

export const useTodoKanbanStore = defineStore('todo', {
  state: () => ({
    todos: [
      { id: 1, text: 'a', completed: false },
      { id: 2, text: 'b', completed: false },
    ],
  }),
  actions: {
    addTodo: (text) => {
      const todo = {
        id: new Date().getTime(),
        text,
        completed: false,
      }
      this.todos.push(todo)
    },
    toggleTodo: (todo) => {
      todo.completed = !todo.completed
    },
    removeTodo: (todo) => {
      const index = this.todos.indexOf(todo)
      if (index > -1) {
        this.todos.splice(index, 1)
      }
    },
  },
})