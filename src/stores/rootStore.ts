import { createStore } from "vuex";
import { authenticationStore } from "./authenticationStore";
import { banListStore } from "./BanListStore";
import { postsStore } from "./postsStore";

export const store = createStore({
  modules: {
    auth: authenticationStore,
    banList: banListStore,
    posts: postsStore
  }
});
