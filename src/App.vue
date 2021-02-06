<template>
  <aside>
    <MainNavigation />
  </aside>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavigation from "./components/shared/MainNavigation.vue";

export default defineComponent({
  name: "App",
  components: { MainNavigation },
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
}

main {
  max-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  overflow-y: scroll;
}
</style>