import { createStore } from "vuex";
import { Posts } from "../types";

interface PostStoreState {
  posts: Posts[];
}

/**
 * Vuex store to manage post list
 */
export const postsStore = {
  state: () => ({
    posts: [],
  }),
  mutations: {
    /**
     * Filter and add posts to the list of posts
     * @param state state to update
     * @param posts posts to add
     */
    addPosts(state: PostStoreState, posts: Posts[]) {
      // Remove already used posts
      posts = posts.filter(
        (p) => state.posts.findIndex((sp: Posts) => sp.id === p.id) === -1
      );

      // Add posts to list
      state.posts = [...state.posts, ...posts];
    },
    
    /**
     * Clear the list of posts
     * @param state state to update
     */
    clearPosts(state: PostStoreState) {
      state.posts = [];
    },

    /**
     * Find and update a post in the state
     * @param state  state to update
     * @param post post to update with new infos
     */
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
