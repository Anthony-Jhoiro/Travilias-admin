import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ImagesPage } from "../components/pages/images";
import SuggestionsPage from "../components/pages/suggestions";
import PinsPage from "../components/pages/pins";
import { DefaultComponent } from "../components/shared";

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
    component: ImagesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
