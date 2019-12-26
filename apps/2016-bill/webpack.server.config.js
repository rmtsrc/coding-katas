'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'server.jsx'),

  output: {
    filename: 'src/server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function(ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext;
  }, {}),

  node: {
    __filename: true,
    __dirname: true
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
      'process.env.DESCRIPTION': JSON.stringify(require('./package.json').description),
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    })
  ]
};
