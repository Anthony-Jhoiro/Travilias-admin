import { BanWord } from "../types";
import { HTTPMethods, makeRequest } from "./request";


async function getBanWords(){  
  return await makeRequest<BanWord[]>(HTTPMethods.GET, "/banword");
}

async function postBanWord(banword:BanWord):Promise<{banWord:BanWord}>{
  return await makeRequest<{banWord:BanWord}>(HTTPMethods.POST, "/banword", banword);
}

async function deleteBanWord(banwordId:string):Promise<{banWords:BanWord[]}>{
  return await makeRequest<{banWords:BanWord[]}>(HTTPMethods.DELETE, "/banword/" + banwordId);
}

export {
  getBanWords,
  postBanWord,
  deleteBanWord,
}