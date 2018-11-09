const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: '3001',
    hot: true,
    proxy: {
      context: ['/auth', '/api'],
      target: 'http://localhost:3000',
    }
  }
});