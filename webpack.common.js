/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
// https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject: 'body',
  minify: {
    collapseWhitespace: true,
    minifyCSS: true,
  },
});

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [HTMLWebpackPluginConfig],

  module: {
    rules: [{
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/,
          /\.d\.ts$/,
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(gltf|mp3|svg|glb|png|jpe?g)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            name: '[sha256:hash:base64:16].[ext]',
          },
        }],
      },
    ],
  },
};
