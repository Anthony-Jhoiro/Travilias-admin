import { createStore } from "vuex";
import { authenticationStore } from "./authenticationStore";
import { banListStore } from "./BanListStore";

export const store = createStore({
  modules: {
    auth: authenticationStore,
    banList: banListStore,
  }
});
