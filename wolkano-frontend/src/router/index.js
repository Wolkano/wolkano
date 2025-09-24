import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import AboutView from "../views/AboutView.vue";
import OfferMeView from "../views/OfferMeView.vue";
import WebbUtvView from "../views/WebbUtvView.vue";
import HowItWorks from "@/views/HowItWorks.vue";
import VisionCrm from "../views/CrmView.vue";

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
  { path: "/crm", name: "Vision Crm · Wolkano", component: VisionCrm },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
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
