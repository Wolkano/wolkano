import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import AboutView from "../views/AboutView.vue";
import OfferMeView from "../views/OfferMeView.vue";
import WebbUtvView from "../views/WebbUtvView.vue";

const routes = [
  {
    path: "/",
    name: "Wolkano",
    component: HomeView,
  },
  {
    path: "/about",
    name: "Om oss · Wolkano",
    component: AboutView,
  },
  {
    path: "/form",
    name: "Kontakta oss · Wolkano",
    component: FormView,
  },
  {
    path: "/OfferMe",
    name: "OfferMe",
    component: OfferMeView,
  },
  {
    path: "/WebbUtv",
    name: "Webbutveckling · Wolkano",
    component: WebbUtvView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
