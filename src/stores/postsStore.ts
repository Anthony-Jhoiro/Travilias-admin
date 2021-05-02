import { createStore } from "vuex";
import { Posts } from "../types";

interface PostStoreState {
  posts: Posts[];
}

export const postsStore = {
  state: () => ({
    posts: [],
  }),
  mutations: {
    addPosts(state: PostStoreState, posts: Posts[]) {
      // Remove already used posts
      posts = posts.filter(
        (p) => state.posts.findIndex((sp: Posts) => sp.id === p.id) === -1
      );

      // Add posts to list
      state.posts = [...state.posts, ...posts];
    },
    clearPosts(state: PostStoreState) {
      state.posts = [];
    },
    updatePost(state: PostStoreState, post: Posts) {
      const index = state.posts.findIndex((p) => p.id === post.id);

      if (index === -1) {
        state.posts = [...state.posts, post];
      } else {
        state.posts = [
          ...state.posts.slice(0, index),
          post,
          ...state.posts.slice(index + 1),
        ];
      }
    },
  },
};
