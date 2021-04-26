import { BanWord } from "../types";
import { HTTPMethods, makeRequest } from "./request";


async function getBanWords(){

  return await makeRequest<BanWord[]>(HTTPMethods.GET, "/banword");

}

export {

  getBanWords

}