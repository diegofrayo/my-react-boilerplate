const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackConfigUtils = require('./config/webpack.config.utils.js');

const ENVIRONMENT = process.env.NODE_ENV.trim();
let environmentConfig;
let isDevelopment;
let settings = {};

try {
  settings = JSON.parse(fs.readFileSync('./config.app.json', 'utf8'))[ENVIRONMENT];
} catch (error) {
  console.log(error);
  process.exit();
}

const babelConfig = {
  test: /(\.js|.jsx)$/,
  exclude: /(node_modules|webpack_cache|config)/,
  use: [{
    loader: 'babel-loader',
    options: {
      plugins: ['syntax-jsx', 'transform-object-rest-spread'],
      presets: ['es2015', 'react']
    }
  }]
};

const plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        configFile: path.join(__dirname, './config.eslint.json')
      }
    }
  }),
  new webpack.DefinePlugin({
    APP_SETTINGS: JSON.stringify(settings)
  })
];

const entry = [
  'babel-polyfill',
  'whatwg-fetch',
  './app/index.jsx'
];

if (ENVIRONMENT === 'development') {
  environmentConfig = require('./config/webpack.config.dev.js');
  isDevelopment = true;
  environmentConfig.configureBabel(babelConfig);
} else {
  environmentConfig = require('./config/webpack.config.prod.js');
  isDevelopment = false;
}

const config = Object.assign({
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'app'), 'node_modules']
  },
  module: {
    rules: [babelConfig, {
      exclude: /(node_modules|webpack_cache|config)/,
      loader: 'eslint-loader',
      test: /(\.js|.jsx)$/
    }]
  }
}, environmentConfig.webpackConfig);

config.plugins = plugins.concat(config.plugins);
config.entry = config.entry.concat(entry);

module.exports = config;
