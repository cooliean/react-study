'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';



let config = Object.assign({}, baseConfig, {
  entry: {
    page1: ['./src/page1', hotMiddlewareScript],
    page2: ['./src/page2', hotMiddlewareScript]
  },
  // output: {
  //   path: path.join(__dirname, '/../dist/assets'),
  //   filename: '[name]/app.js',
  //   publicPath: `.${defaultSettings.publicPath}`
  // },
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  module: defaultSettings.getDefaultModules()
});

console.log(config);

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
