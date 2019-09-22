const path = require('path');
const webpack = require('webpack');

module.exports = {
  config: isDevelopmentEnv => {
    if (isDevelopmentEnv) {
      return {
        devtool: 'source-map',
        mode: 'development',
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, '../build/js'),
          publicPath: '/js/',
        },
      };
    }

    return {
      mode: 'production',
      output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../build/js'),
      },
    };
  },

  entry: isDevelopmentEnv => {
    let entry = ['@babel/polyfill', 'whatwg-fetch'];

    if (isDevelopmentEnv) {
      entry = entry.concat([
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?overlay=false',
      ]);
    }

    entry.push('./src/index.jsx');

    return entry;
  },

  styles: () => {
    return {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    };
  },

  plugins: ({ isDevelopmentEnv, isESLintDisabled, settings }) => {
    let plugins = [new webpack.DefinePlugin({ APP_SETTINGS: JSON.stringify(settings) })];

    if (isDevelopmentEnv) {
      plugins = plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ]);
    } else {
      plugins = plugins.concat([new webpack.optimize.OccurrenceOrderPlugin()]);
    }

    if (!isESLintDisabled) {
      plugins.unshift(
        new webpack.LoaderOptionsPlugin({
          options: {
            eslint: {
              configFile: path.join(__dirname, './../eslintrc.json'),
            },
          },
        }),
      );
    }

    return plugins;
  },

  babel: isDevelopmentEnv => {
    const babelConfig = {
      test: /(\.js|.jsx)$/,
      exclude: /(node_modules|config)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
            ],
            presets: [
              '@babel/preset-env',
              '@babel/react',
              '@emotion/babel-preset-css-prop',
            ],
            env: {
              production: {
                plugins: ['transform-remove-console'],
              },
            },
          },
        },
      ],
    };

    if (isDevelopmentEnv) {
      babelConfig.use[0].options.plugins.unshift('react-hot-loader/babel');
    }

    return babelConfig;
  },

  eslint: isESLintDisabled => {
    if (!isESLintDisabled) {
      return {
        exclude: /(node_modules|config)/,
        include: /(src)/,
        loader: 'eslint-loader',
        test: /(\.js|.jsx)$/,
      };
    }

    return {};
  },
};
