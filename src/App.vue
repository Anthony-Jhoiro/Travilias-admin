<template>
  <h1>Hello App!</h1>
  <nav>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
</style>