import {createWebHistory,createRouter, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import HelloFrance from "../components/HelloFrance.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    
    redirect: "/foo"
  },
  {
    path: "/foo",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/bar",
    name: "HelloFrance",
    component: HelloFrance,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;