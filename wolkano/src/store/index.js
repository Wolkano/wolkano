import { createStore } from "vuex";
import dictionary from "./dictionary.json";
import axios from "axios";

export default createStore({
  state: {
    priceChoice: null,
    copy: dictionary,
    submittedSuccessfully: false,
  },
  getters: {},
  mutations: {
    setPriceChoice(state, payload) {
      state.priceChoice = payload;
    },
    setSubmittedSuccessfully(state, payload) {
      state.submittedSuccessfully = payload;
      console.log(state.submittedSuccessfully);
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
        } catch (error) {
          commit("setSubmittedSuccessfully", false);
        }
      })();
    },
  },
  modules: {},
});
