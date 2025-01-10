import { createStore } from "vuex";
import dictionary from "./dictionary.json";
import axios from "axios";

export default createStore({
  state: {
    priceChoice: null,
    copy: dictionary,
    submittedSuccessfully: false,
    hasSubmitted: false,
    submittedOfferSuccessfully: false,
    hasSubmittedOffer: false,
  },
  getters: {},
  mutations: {
    setSubmittedSuccessfully(state, payload) {
      state.submittedSuccessfully = payload;
    },
    setHasSubmitted(state, payload) {
      state.hasSubmitted = payload;
    },
    setOfferSubmittedSuccessfully(state, payload) {
      state.submittedOfferSuccessfully = payload;
    },
    setHasSubmittedOffer(state, payload) {
      state.hasSubmittedOffer = payload;
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
    async submitOffer({ commit }, offerInfo) {
      (async () => {
        try {
          console.log(offerInfo);
          await axios.post("http://localhost:3000/api/send-offer", offerInfo);
          commit("setOfferSubmittedSuccessfully", true);
          commit("setHasSubmittedOffer", true);
        } catch (error) {
          commit("setOfferSubmittedSuccessfully", true);
          commit("setHasSubmittedOffer", true);
        }
      })();
    },
  },
  modules: {},
});
