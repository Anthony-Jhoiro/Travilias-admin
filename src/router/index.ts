import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { DefaultComponent } from "../components/shared";
import SuggestionsPage from "../components/pages/suggestions";
import BanListPage from "../components/pages/banlist";

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
    component: BanListPage,
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
