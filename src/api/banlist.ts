import { store } from "../stores";
import { BanWord, formatBanWord } from "../types";
import { HTTPMethods, makeRequest } from "./request";

/**
 * Fetch the API to the banList store
 */
async function getBanWords(){
  
  const banWords = await makeRequest<BanWord[]>(HTTPMethods.GET, "/banword");

  store.commit('setBanList', banWords.map(formatBanWord));

}

/**
 * Post a banWord to the API
 * @param banWord the ban word to post
 */
async function postBanWord(banword:BanWord):Promise<void>{
  const {banWord} = await makeRequest<{banWord:BanWord}>(HTTPMethods.POST, "/banword", banword);

  store.commit('addBanList', formatBanWord(banWord));
}

/**
 * Delete a banWord with the API
 * @param banwordId the id of the banword which will be deleted
 */
async function deleteBanWord(banwordId:string):Promise<void>{
  const {banWords} = await makeRequest<{banWords:BanWord[]}>(HTTPMethods.DELETE, "/banword/" + banwordId);

  store.commit('setBanList', banWords.map(formatBanWord));
}

export {
  getBanWords,
  postBanWord,
  deleteBanWord,
}