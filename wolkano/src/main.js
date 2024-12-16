import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import FontAwesomeIcon from "./assets/fontawesome";
import { MotionPlugin } from "@vueuse/motion";

createApp(App)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
