import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import AboutView from "../views/AboutView.vue";
import OfferMeView from "../views/OfferMeView.vue";
import WebbUtvView from "../views/WebbUtvView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/form",
    name: "Form",
    component: FormView,
  },
  {
    path: "/OfferMe",
    name: "OfferMe",
    component: OfferMeView,
  },
  {
    path: "/WebbUtv",
    name: "WebbUtv",
    component: WebbUtvView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
