import Keycloak from "keycloak-js";
import { createStore } from "vuex";

export interface AuthenticationStoreOptions {
  keycloak: Keycloak.KeycloakInstance | null
}

export const authenticationStore = {
  state: () => ({
    keycloak: null
  }),
  mutations: {
    setKeycloakInstance(state: any, keycloak: Keycloak.KeycloakInstance) {
      state.keycloak = keycloak;
    },
  },

  getters: {
    profile(state: any) {
      return state.keycloak?.profile || {};
    },

    authenticationToken(state: any) {
      console.log(state.keycloak?.token, state.keycloak);
      return state.keycloak?.token;
    }
  }
};
