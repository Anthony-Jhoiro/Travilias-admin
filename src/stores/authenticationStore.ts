import Keycloak from "keycloak-js";
import { createStore } from "vuex";

export interface AuthenticationStoreOptions {
  /**
   * Current user profile (**It can be null**)
   */
  profile: Keycloak.KeycloakProfile | null;
}

export const authenticationStore = createStore<AuthenticationStoreOptions>({
  state: {
    profile: null,
  },
  mutations: {
    /**
     * Set the profile in the state
     * @param state state object
     * @param profile new value for profile
     */
    setProfile(state, profile: Keycloak.KeycloakProfile) {
      state.profile = profile;
    },
  },
});
