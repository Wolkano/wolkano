import { createStore } from "vuex";
import dictionary from "./dictionary.json";
import axios from "axios";

export default createStore({
  state: {
    priceChoice: null,
    copy: dictionary,
    submittedSuccessfully: false,
    hasSubmitted: false,
  },
  getters: {},
  mutations: {
    setPriceChoice(state, payload) {
      state.priceChoice = payload;
    },
    setSubmittedSuccessfully(state, payload) {
      state.submittedSuccessfully = payload;
    },
    setHasSubmitted(state, payload) {
      state.hasSubmitted = payload;
    },
  },
  actions: {
    async submitToNotion({ commit }, customerInfo) {
      (async () => {
        try {
          await axios.post(
            "http://localhost:3000/api/send-to-zapier",
            customerInfo
          );
          commit("setSubmittedSuccessfully", true);
          commit("setHasSubmitted", true);
        } catch (error) {
          commit("setSubmittedSuccessfully", false);
          commit("setHasSubmitted", true);
        }
      })();
    },
  },
  modules: {},
});
