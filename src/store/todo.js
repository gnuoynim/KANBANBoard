
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
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
        time: item.time,
        id: Date.now(),
        detail: [],
        clickValue: item.clickValue,
      };
      this.todoList.push(newItem);
    },
    addTodoDetail(item) {
      const newItem = {
        detail: item.detail
      };
    
      if (!Array.isArray(this.detailList[item.clickValue])) {
        this.detailList[item.clickValue] = [];
      }
      this.detailList[item.clickValue].push(newItem);
    
      const targetTodoItem = this.todoList.find(todo => todo.id === item.clickValue);
      if (targetTodoItem) {
        if (!Array.isArray(targetTodoItem.detail)) {
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
  },
});
