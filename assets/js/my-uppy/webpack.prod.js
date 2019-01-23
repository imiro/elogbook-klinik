const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
});
