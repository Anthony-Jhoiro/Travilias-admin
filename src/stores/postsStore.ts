import { createStore } from "vuex";
import { Posts } from "../types";


export const postsStore = createStore<{posts: Posts[]}>({
  state: {
    posts: []
  },
  mutations: {
    addPosts(state, posts: Posts[]) {
      // Remove already used posts
      posts = posts.filter(p => state.posts.findIndex(sp => sp.id === p.id) === -1);

      // Add posts to list
      state.posts = [...state.posts, ...posts];
    },
    clearPosts(state) {
      state.posts = [];
    }
  }
})