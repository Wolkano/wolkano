import { createStore } from "vuex";
import dictionary from "./dictionary.json";

export default createStore({
  state: {
    priceChoice: null,
    copy: dictionary,
  },
  getters: {},
  mutations: {
    setPriceChoice(state, payload) {
      state.priceChoice = payload;
    },
  },
  actions: {},
  modules: {},
});
