import { createStore } from "vuex";
import { Posts } from "../types";


export const postsStore = {
  state: () => ({
    posts: []
  }),
  mutations: {
    addPosts(state: any, posts: Posts[]) {
      // Remove already used posts
      posts = posts.filter(p => state.posts.findIndex((sp: Posts) => sp.id === p.id) === -1);

      // Add posts to list
      state.posts = [...state.posts, ...posts];
    },
    clearPosts(state: any) {
      state.posts = [];
    }
  }
}