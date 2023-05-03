import { defineStore } from "pinia";

export const useDetailStore = defineStore('detailStore', {
  state: () => ({
    detailList: [],
    boards: [],
    boardSelect: [],
    todoOption: [
      { doing: '' },
      { done: '' }
    ],
    selectedBoard: 0,

  }),
  getters: {
    typeOption: state => state.todoOption,
  },
  actions: {
    setSelected(selected) {
      this.selectedBoard = selected;
    },
  }
})

