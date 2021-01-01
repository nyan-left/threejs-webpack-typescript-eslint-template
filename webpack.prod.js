/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = common, {
  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],

  optimization: {
    minimize: true,
  },
};
