import { defineStore } from "pinia";

export const useDetailStore = defineStore('detailStore',{
  state : () =>([
    {detailList : ""},
    {detailOption : ""},
  ]),
  getters:{

  },
  actions:{
    addList(){
      
    }
  }
})