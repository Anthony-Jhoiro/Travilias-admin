// import { store } from "../stores";
import { store } from "../stores";
import { Posts } from "../types";
import { HTTPMethods, makeRequest } from "./request";

export async function getPosts(limit: number, offset: number, start: Date) {
  let url = "/post?";
  if (limit) url += "limit=" + limit + "&";
  if (offset) url += "offset=" + offset + "&";
  if (start) url += "start=" + start.toISOString();

  const posts = await makeRequest<Posts[]>(HTTPMethods.GET, url);

  if (posts) {
    // console.log(store.)
    store.commit('addPosts', posts);
  }
}
