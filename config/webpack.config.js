const path = require("path");
const webpack = require("webpack");

module.exports = {
  config: isDevelopmentEnvironment => {
    if (isDevelopmentEnvironment) {
      return {
        devtool: "source-map",
        mode: "development",
        output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "../build/js"),
          publicPath: "/js/",
        },
      };
    }

    return {
      mode: "production",
      output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../build/js"),
      },
    };
  },

  entry: isDevelopmentEnvironment => {
    let entry = ["@babel/polyfill", "whatwg-fetch"];

    if (isDevelopmentEnvironment) {
      entry = entry.concat([
        "react-hot-loader/patch",
        "webpack-hot-middleware/client?overlay=false",
      ]);
    }

    entry.push("./src/index.jsx");

    return entry;
  },

  styles: () => {
    return {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    };
  },

  plugins: ({ isDevelopmentEnvironment, isESLintEnabled, settings }) => {
    let plugins = [new webpack.DefinePlugin({ APP_SETTINGS: JSON.stringify(settings) })];

    if (isDevelopmentEnvironment) {
      plugins = plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ]);
    } else {
      plugins = plugins.concat([new webpack.optimize.OccurrenceOrderPlugin()]);
    }

    if (isESLintEnabled) {
      plugins.unshift(
        new webpack.LoaderOptionsPlugin({
          options: {
            eslint: {
              configFile: path.join(__dirname, "./../.eslintrc"),
            },
          },
        }),
      );
    }

    return plugins;
  },

  babel: isDevelopmentEnvironment => {
    const babelConfig = {
      test: /(\.js|.jsx)$/,
      exclude: /(node_modules|config)/,
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-syntax-dynamic-import",
            ],
            presets: ["@babel/preset-env", "@babel/react"],
            env: {
              production: {
                plugins: ["transform-remove-console"],
              },
            },
          },
        },
      ],
    };

    if (isDevelopmentEnvironment) {
      babelConfig.use[0].options.plugins.unshift("react-hot-loader/babel");
    }

    return babelConfig;
  },

  eslint: isESLintEnabled => {
    if (isESLintEnabled) {
      return {
        exclude: /(node_modules|config)/,
        include: /(src)/,
        loader: "eslint-loader",
        test: /(\.js|.jsx)$/,
      };
    }

    return {};
  },
};
