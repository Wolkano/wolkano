import { createStore } from "vuex";
import dictionary from "./dictionary.json";
import axios from "axios";

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
  actions: {
    async submitToNotion(state, customerInfo) {
      console.log(customerInfo);
      (async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/send-to-zapier",
            customerInfo
          );
          console.log(response);
        } catch (error) {
          console.error("Error creating page:", error);
        }
      })();
    },
  },
  modules: {},
});
