import { createStore } from "vuex";
import { authenticationStore } from "./authenticationStore";
import { imagesStore } from "./imagesStore";
import { banListStore } from "./BanListStore";
import { postsStore } from "./postsStore";

/**
 * Main Vuex store of the application
 */
export const store = createStore({
  modules: {
    /**
     * Authentication manager
     */
    auth: authenticationStore,

    /**
     * Post list manager
     */
    posts: postsStore,

    /**
     * Images list manager
     */
    images: imagesStore,

    /**
     * Banlist manager
     */
    banList: banListStore,
  }
});
