<template>
  <div class="main-navigation">
    <div class="title-container">
      <h1 class="title">
        <router-link to="/"> Travilias - Admin</router-link>
      </h1>
    </div>
    <div v-for="route in routes" :key="route.name" class="link-container">
      <i class="fas icon" :class="route.icon" />
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNavigation",
  setup() {
    return {
      routes: [
        {
          name: "Suggestions",
          path: "/suggestions",
          icon: "fa-comment",
        },
        {
          name: "Épingles",
          path: "/pins",
          icon: "fa-thumbtack",
        },
        {
          name: "Images",
          path: "/images",
          icon: "fa-images",
        },
        {
          name: "Posts",
          path: "/posts",
          icon: "fa-newspaper",
        },
        {
          name: "Banish Words",
          path: "/banlist",
          icon: "fa-ban",
        },
        {
          name: "Statistics",
          path: "/statistics",
          icon: "fa-chart-line",
        },
      ],
    };
  },
});
</script>

<style scoped>
.main-navigation {
  background-color: #19647e;
  color: #fff;
  width: 18rem;
  height: 100vh;
}
.main-navigation a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  outline: none;
}

.main-navigation a.router-link-active {
  border-bottom: 1.5px solid #fff;
}

.link-container {
  margin: 1.5em;
}
.link-container .icon {
  margin-right: 1em;
}

.main-navigation .title-container .title {
  margin: 0;
  font-size: 1.2em;
}

.title-container {
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
  border-bottom: 2px solid #ddd;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 3em;
}
</style>