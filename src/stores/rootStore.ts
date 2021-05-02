import { createStore } from "vuex";
import { authenticationStore } from "./authenticationStore";
import { imagesStore } from "./imagesStore";
import { banListStore } from "./BanListStore";
import { postsStore } from "./postsStore";

export const store = createStore({
  modules: {
    auth: authenticationStore,
    posts: postsStore,
    images: imagesStore,
    banList: banListStore,
  }
});
