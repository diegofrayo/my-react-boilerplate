require('dotenv').config();
const fs = require('fs');
const path = require('path');
const webpackConfig = require('./config/webpack.config.js');

module.exports = (env = process.env) => {
  const ENVIRONMENT = env.NODE_ENV || 'development';
  const isDevelopmentEnv = ENVIRONMENT === 'development';
  const isESLintDisabled = env.DISABLE_LINT === 'true';
  const settings = { environment: ENVIRONMENT };

  const config = {
    context: __dirname,
    entry: webpackConfig.entry(isDevelopmentEnv),
    plugins: webpackConfig.plugins({
      isDevelopmentEnv,
      isESLintDisabled,
      settings,
    }),
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        react: require.resolve('react'),
      },
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        webpackConfig.babel(isDevelopmentEnv),
        webpackConfig.styles(),
        webpackConfig.eslint(isESLintDisabled),
      ],
    },
    ...webpackConfig.config(isDevelopmentEnv),
  };

  return config;
};
