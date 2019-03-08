const fs = require('fs');
const path = require('path');
const webpackConfig = require('./config/webpack.config.js');

module.exports = (env = {}) => {
  const ENVIRONMENT = env.NODE_ENV || 'development';
  const isDevelopmentEnv = ENVIRONMENT === 'development';
  const isESLintEnabled = !env.DISABLE_LINT;
  let settings = {};

  try {
    settings = JSON.parse(fs.readFileSync('./config.app.json', 'utf8'))[ENVIRONMENT];
  } catch (error) {
    console.log(error);
    process.exit();
  }

  const config = Object.assign(
    {},
    {
      context: __dirname,
      entry: webpackConfig.entry(isDevelopmentEnv),
      plugins: webpackConfig.plugins({
        isDevelopmentEnv,
        settings,
        isESLintEnabled,
      }),
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
      module: {
        rules: [
          webpackConfig.babel(isDevelopmentEnv),
          webpackConfig.styles(),
          webpackConfig.eslint(isESLintEnabled),
        ],
      },
    },
    webpackConfig.config(isDevelopmentEnv),
  );

  return config;
};
