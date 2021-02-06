import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { DefaultComponent } from "../components/shared";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/suggestions",
  },
  {
    path: "/suggestions",
    component: DefaultComponent,
  },
  {
    path: "/banlist",
    component: DefaultComponent,
  },
  {
    path: "/pins",
    component: DefaultComponent,
  },
  {
    path: "/posts",
    component: DefaultComponent,
  },
  {
    path: "/statistics",
    component: DefaultComponent,
  },
  {
    path: "/images",
    component: DefaultComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
