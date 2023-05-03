import { defineStore } from 'pinia'

export const useDetailStore = defineStore('detailStore', {
  state: () => ({
    detailList: [],
    boards: [],
    boardSelect: [],
    doneList: [],
    boards: [],
    todoOption: [{ doing: '' }, { done: '' }],
    selectedBoard: 0,
  }),
  getters: {
    typeOption: (state) => state.todoOption,
  },
  actions: {
    setSelected(selected) {
      this.selectedBoard = selected
    },
    addDetail(event) {
      if (this.selectedBoard === 'doing') {
        this.doingList.push(event.target.value)
        this.boards.push(event.target.value)
      } else if (this.selectedBoard === 'done') {
        this.doneList.push(event.target.value)
        this.boardSelect.push(event.target.value)
      }
      event.target.value = ''
    },
  },
})
