import { createStore } from "vuex";
import dictionary from "./dictionary.json";

const NOTION_DATABASE_ID = "1586c8482f7c809ca6a7c1e1f7b4acb3";
const NOTION_API_KEY = "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";

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
    async submitToNotion(state, { title, description }) {
      const { Client } = require("@notionhq/client");
      const notion = new Client({ auth: NOTION_API_KEY });
      console.log(title, description);
      (async () => {
        try {
          const response = await notion.pages.create({
            parent: {
              database_id: NOTION_DATABASE_ID, // Replace with your database ID
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: "Simple Text Item", // The text content of the page
                    },
                  },
                ],
              },
            },
          });

          console.log("Page successfully created:", response);
        } catch (error) {
          console.error("Error creating page:", error);
        }
      })();
    },
  },
  modules: {},
});
