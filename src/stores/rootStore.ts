import { createStore } from "vuex";
import { authenticationStore } from "./authenticationStore";
import { postsStore } from "./postsStore";

export const store = createStore({
  modules: {
    auth: authenticationStore,
    posts: postsStore
  }
});
