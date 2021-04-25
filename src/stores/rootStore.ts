import { createStore } from "vuex";
import { authenticationStore } from "./authenticationStore";

export const store = createStore({
  modules: {
    auth: authenticationStore
  }
});
