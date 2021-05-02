import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ImagesPage } from "../components/pages/images";
import { PostsPage } from "../components/pages/posts";
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
    path: "/posts",
    component: PostsPage,
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
