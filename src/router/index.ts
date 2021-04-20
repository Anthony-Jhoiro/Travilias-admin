import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { DefaultComponent } from "../components/shared";
import SuggestionsPage from "../components/pages/suggestions";
import PinsPage from "../components/pages/pins";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/suggestions",
  },
  {
    path: "/suggestions",
    component: SuggestionsPage,
  },
  {
    path: "/banlist",
    component: DefaultComponent,
  },
  {
    path: "/pins",
    component: PinsPage,
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
