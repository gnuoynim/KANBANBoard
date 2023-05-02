import { defineStore } from "pinia";

export const useDetailStore = defineStore('detailStore', {
  state: () => ({
    detailList: [],
    todoOption: ''
  }),
  getters: {
    typeOption: state => state.todoOption
  },
  actions: {
    addList() {
      
    }
  }


})

