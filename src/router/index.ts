import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ImagesPage } from "../components/pages/images";
import { PostsPage } from "../components/pages/posts";
import SuggestionsPage from "../components/pages/suggestions";
import BanListPage from "../components/pages/banlist";
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
    component: BanListPage,
  },
  {
    path: "/pins",
    component: PinsPage,
  },
  {
    path: "/posts",
    component: PostsPage,
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
