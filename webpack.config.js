require("dotenv").config();

const fs = require("fs");
const path = require("path");

const webpackConfig = require("./config/webpack.config.js");

module.exports = (env = process.env) => {
  const environment = env.NODE_ENV || "development";
  const isDevelopmentEnvironment = environment === "development";
  const isESLintEnabled = env.ENABLE_LINT === "false";
  const settings = { environment };

  const config = {
    context: __dirname,
    entry: webpackConfig.entry(isDevelopmentEnvironment),
    plugins: webpackConfig.plugins({
      isDevelopmentEnvironment,
      isESLintEnabled,
      settings,
    }),
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
        react: require.resolve("react"),
      },
      extensions: [".js", ".jsx"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    module: {
      rules: [
        webpackConfig.babel(isDevelopmentEnvironment),
        webpackConfig.styles(),
        webpackConfig.eslint(isESLintEnabled),
      ],
    },
    ...webpackConfig.config(isDevelopmentEnvironment),
  };

  return config;
};
