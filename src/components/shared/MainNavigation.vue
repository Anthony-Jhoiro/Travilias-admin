<template>
  <div class="sidebar" v-bind:class="[open ? 'sidebar-open' : 'sidebar-close']">
    <h1 class="sidebar-title sidebar-header">Travilias - Admin</h1>
    <h2 class="sidebar-displayed-name sidebar-header">{{ displayedName }}</h2>
    <!-- Start Toggle button -->
    <button class="sidebar_toggle_btn" @click="toggleOpening">
      <i class="fas" v-bind:class="[open ? 'fa-times' : 'fa-bars']" />
    </button>
    <!-- End Toggle button -->

    <!-- Start Route link -->
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="route-link"
    >
      <i class="fas icon route-icon" :class="route.icon" />
      <span v-if="open" class="route-name">{{ route.name }}</span>
    </router-link>
    <!-- End Route link -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

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
      ],
    };
  },
  data() {
    return {
      /**
       * Boolean defining the state of the sidebar (open = true; close = false)
       */
      open: false,
    };
  },
  methods: {
    /**
     * Switch the open data value
     */
    toggleOpening() {
      this.open = !this.open;
    },
  },
  computed: {
    /**
     * Return the current user displayed name from the store
     */
    displayedName() {
      const store = useStore();
      const profile = store.getters.profile;

      return profile ? `${profile.firstName} ${profile.lastName}` : "";
    },
  },
});
</script>

<style scoped>
.sidebar {
  background-color: #2f323a;
  height: 100vh;
  transition: 0.3s;
  transition-property: width;
}

.sidebar-open {
  width: 250px;
}

.sidebar-close {
  width: 60px;
  padding-top: 5.3rem;
}
.sidebar-open .sidebar-header {
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  width: 250px;
  text-align: center;
  margin: 0;
}

.sidebar-open .sidebar-title {
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.sidebar-open .sidebar-displayed-name {
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
}

.sidebar-close .sidebar-header {
  display: none;
}

.sidebar .route-link {
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.1s;
  transition-property: background-color;
}

.sidebar-open .route-link {
  padding-left: 40px;
  overflow: hidden;
  white-space: nowrap;
}
.sidebar-close .route-link {
  text-align: center;
}

.sidebar .route-link:hover {
  background-color: #0d9dbb;
}

.sidebar-open .route-icon {
  padding-right: 10px;
}

.sidebar_toggle_btn {
  width: 100%;
  line-height: 60px;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  color: #fff;
  font-size: 25px;
  transition: 0.5s;
  cursor: pointer;
}

.sidebar_toggle_btn:hover {
  color: #0d9dbb;
}

.sidebar-close .route-link .route-name {
  display: none;
}

.sidebar-close .route-link {
  font-size: 20px;
}
</style>