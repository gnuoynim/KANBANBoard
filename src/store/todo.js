import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    todoDetail: [],
    detailList: [],
    doneList: [],
    doingList:[],
    todoOption: { doing: '', done: '' },
  }),
  getters: {
    typeOption: (state) => state.todoOption,
  },
  actions: {
    addTodo(item) {
      const newItem = {
        text: item.text,
        time: this.todoTime,
        id: this.todoList.length,
        detail :  item.detail
      }
      this.todoList.push(newItem);
    },

    addTodoDetail(item) {
      const newItem = {
        detail : item.detail
      }
      this.detailList.push(newItem)
      const targetTodoItem = this.todoList.find(todo => todo.id === item.clickValue);
      if (targetTodoItem) {
        if (!targetTodoItem.detail) {
          targetTodoItem.detail = [];
        }
        targetTodoItem.detail.push(item.detail);
      } 
    },
    updateTodoOption(selectedValue) {
      this.todoOption[selectedValue] = selectedValue;
    },
    moveTodoItem(selectedValue, clickValue) {
      const targetIndex = this.todoList.findIndex(todo => todo.id === clickValue);
      if (targetIndex > -1) {
        const targetItem = this.todoList[targetIndex];
        this.todoList.splice(targetIndex, 1);
        if (selectedValue === 'doing') {
          this.doingList.push(targetItem);
        } else if (selectedValue === 'done') {
          this.doneList.push(targetItem);
        } 
      } 
    },
    setTodoTime(time) {
      this.todoTime = time
    },
  },
})
