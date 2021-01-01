/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const path = require('path');
const common = require('./webpack.common.js');

module.exports = common, {
  mode: 'development',

  devtool: 'source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    noInfo: true,
    open: true,
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }],
  },
};
