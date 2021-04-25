import Keycloak from "keycloak-js";
import { createStore } from "vuex";

export interface AuthenticationStoreOptions {
  keycloak: Keycloak.KeycloakInstance | null
}

export const authenticationStore = createStore<AuthenticationStoreOptions>({
  state: {
    keycloak: null
  },
  mutations: {
    setKeycloakInstance(state, keycloak: Keycloak.KeycloakInstance) {
      state.keycloak = keycloak;
    },
  },

  getters: {
    profile(state) {
      return state.keycloak?.profile;
    },

    authenticationToken(state) {
      console.log(state.keycloak?.token, state.keycloak);
      return state.keycloak?.token;
    }
  }
});
