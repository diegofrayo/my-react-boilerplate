const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {

  lessConfig: (plugins, isDevelopment = true) => {

    let extractLESS;

    if (isDevelopment) {
      extractLESS = new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true,
        disable: isDevelopment
      });
    } else {
      extractLESS = new ExtractTextPlugin('styles.css');
    }

    plugins.push(extractLESS);

    return [{
      exclude: [/(node_modules|webpack_cache|build)/, path.resolve(__dirname, 'app/styles/reset.less')],
      test: /(\.less)$/,
      use: extractLESS.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: isDevelopment,
            importLoaders: true,
            modules: true,
            localIdentName: isDevelopment ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !isDevelopment
          }
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: isDevelopment
          }
        }]
      })
    }, {
      exclude: /(node_modules|webpack_cache|build)/,
      test: [path.resolve(__dirname, 'app/styles/reset.less')],
      use: extractLESS.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      })
    }];

  },

};
