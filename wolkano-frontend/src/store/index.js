import { createStore } from "vuex";
import dictionary from "./dictionary.json";
import axios from "axios";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = "service_0nygmim";
const YOUR_TEMPLATE_ID = "template_qpul5cj";
const PUBLIC_KEY = "jrV_u3V8n1T9JLxFA";

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
    sendEmail({ commit }, userInfo) {
      emailjs.init(PUBLIC_KEY);
      try {
        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
          from_name: userInfo.name,
          from_email: userInfo.email,
          message: userInfo.info,
          company: userInfo.company,
          phone: userInfo.phone,
        });
        commit("setSubmittedSuccessfully", true);
        commit("setHasSubmitted", true);
      } catch (error) {
        console.log({ error });
      }
    },
    async submitOffer({ commit }, offerInfo) {
      (async () => {
        try {
          console.log(offerInfo);
          await axios.post("http://localhost:3000/api/send-offer", offerInfo);
          commit("setOfferSubmittedSuccessfully", true);
          commit("setHasSubmittedOffer", true);
        } catch (error) {
          commit("setOfferSubmittedSuccessfully", false);
          commit("setHasSubmittedOffer", true);
        }
      })();
    },
  },
  modules: {},
});
