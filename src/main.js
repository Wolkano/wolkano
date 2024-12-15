import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChevronDown } from "oh-vue-icons/icons";

addIcons(BiChevronDown);

createApp(App)
  .use(store)
  .use(router)
  .component("v-icon", OhVueIcon)
  .mount("#app");
