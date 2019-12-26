'use strict';

const path = require("path");
const webpack = require('webpack');

let config = {
  entry: './src/index.jsx',

  output: {
    path: 'public',
    filename: 'js/bundle.js',
    publicPath: ''
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENVIRONMENT': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.DESCRIPTION': JSON.stringify(require('./package.json').description),
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  // add this handful of plugins that optimize the build
  // when we're in production
  config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]);
}

module.exports = config;
