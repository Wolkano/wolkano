import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import FontAwesomeIcon from "./assets/fontawesome";
import { MotionPlugin } from "@vueuse/motion";
import VueScrollTo from "vue-scrollto";
import { createHead } from "@vueuse/head";

const head = createHead();

createApp(App)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .use(VueScrollTo)
  .use(head)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
