import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import AboutView from "../views/AboutView.vue";
import OfferMeView from "../views/OfferMeView.vue";
import WebbUtvView from "../views/WebbUtvView.vue";
import HowItWorks from "@/views/HowItWorks.vue";

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
    name: "OfferMe · Wolkano",
    component: OfferMeView,
  },
  {
    path: "/WebbUtv",
    name: "Webbutveckling · Wolkano",
    component: WebbUtvView,
  },
  {
    path: "/works",
    name: "Hur fungerar det · Wolkano",
    component: HowItWorks,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
