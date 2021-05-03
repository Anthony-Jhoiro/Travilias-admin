import { store } from "../stores";
import { BanWord, formatBanWord } from "../types";
import { HTTPMethods, makeRequest } from "./request";



async function getBanWords(){
  
  const banWords = await makeRequest<BanWord[]>(HTTPMethods.GET, "/banword");

  store.commit('setBanList', banWords.map(formatBanWord));

}

async function postBanWord(banword:BanWord):Promise<void>{
  const {banWord} = await makeRequest<{banWord:BanWord}>(HTTPMethods.POST, "/banword", banword);

  store.commit('addBanList', formatBanWord(banWord));
}

async function deleteBanWord(banwordId:string):Promise<void>{
  const {banWords} = await makeRequest<{banWords:BanWord[]}>(HTTPMethods.DELETE, "/banword/" + banwordId);

  store.commit('setBanList', banWords.map(formatBanWord));
}

export {
  getBanWords,
  postBanWord,
  deleteBanWord,
}