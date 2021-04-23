<template>
  <aside>
    <MainNavigation />
  </aside>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import Keycloak from "keycloak-js";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import MainNavigation from "./components/shared/MainNavigation.vue";
import { AuthenticationStoreOptions } from "./stores/authenticationStore";

export default defineComponent<{}, {profile: Keycloak.KeycloakProfile}>({
  name: "App",
  inject: ['profile'],
  components: { MainNavigation },
  created() {
    if (this.profile) {
      // Pass the injected profile to vuex to avoid using the inject attribute more than one
      const store = useStore<AuthenticationStoreOptions>();

      store.commit('setProfile', this.profile);
    }
  }
});
</script>

<style>
#app {
  --primary: #19647e;
  --primary-dark: #1f271b;
  --primary-light: #28afb0;
  --warning: #f4d35e;
  --danger: #ee964b;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
}

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

main {
  max-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  overflow-y: scroll;
}
</style>