import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    todoDetail: [],
    doingBoard: [],
    doneBoard: [],
    detailList: [],
    boardSelect: [],
    doneList: [],
    doingList:[],
    todoOption: [{ doing: '' }, { done: '' }],
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
      }
      this.todoList.push(newItem);
      return newItem.id;
    },
    setTodoTime(time) {
      this.todoTime = time
    },
    addTodoDetail(item){
     
      const newItem = {
        detail : item.detail,
        
      }
      this.detailList.push(newItem)
    },
    setSelected(selected) {
      this.selectedBoard = selected
    },

  },
})
