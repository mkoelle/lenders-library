import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/home/HomePage.vue";
import CatalogPage from "@/catalog/CatalogPage.vue";
import NotFound from "@/404/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" },
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: CatalogPage
    }
  ]
});
