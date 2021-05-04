import Keycloak from "keycloak-js";

export interface AuthenticationStoreOptions {
  keycloak: Keycloak.KeycloakInstance | null
}

/**
 * Vuex store to manage authentications
 * 
 * the keycloak instance is kept in the state
 * 
 * The profile infos and the authentication token are available as getters
 */
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
