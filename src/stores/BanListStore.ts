import { createStore } from "vuex";
import { BanWord } from "../types";

export interface BanListStore {
  banList: BanWord[] | null; 
}

export const banListStore = {
  state: () => ({
    banList: []
  }),
  mutations: {
    setBanList(state:any, banList:BanWord[]){
      state.banList = banList;
    },
    addBanList(state:any, banword:BanWord){
      state.banList.push(banword);
    }
  },

  getters: {
    getBanList(state:any){
      return state.banList;
    }
  }
};