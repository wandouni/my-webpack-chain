const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  devServer: {
    contentBase: './dist',
    port: '3001',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});