import { Store } from "vuex";
import { authenticationStore } from "./authenticationStore";

export const store = new Store({
  modules: {
    auth: authenticationStore
  }
})