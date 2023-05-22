import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useTodoStore = defineStore('todoStore', {
  // let todoList  = ref('a')
  // return { to}
  state: () => ({
    todoList: [],
    detailList: [],
    doneList: [],
    doingList:[],
   
  }),
  
  actions: {
    addTodo(item) {
      const newItem = {
        text: item.text,
        time: item.time,
        id: Date.now(),
        detail: [],
        clickValue: item.clickValue,
        options :item.option
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
        console.log("rr")
        if (!Array.isArray(targetTodoItem.detail)) {
          targetTodoItem.detail = [];
        }
        targetTodoItem.detail.push(item.detail);
      }else{
        console.log("ss")
      }
    },
    updateTodoOption(selectedValue, clickValue) {
      const targetTodoItem = this.todoList.find(todo => todo.id === clickValue);
      if (targetTodoItem) {
        if (selectedValue === 'doing') {
          targetTodoItem.clickValue = 'doing';
        } else if (selectedValue === 'done') {
          targetTodoItem.clickValue = 'done';
        }
      }
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