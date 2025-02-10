const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.resolve(__dirname, "dist"),
          routes: ["/form", "/#/form", "/"], // Add more routes if needed
        })
      );
    }
  },
});
