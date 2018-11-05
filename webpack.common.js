const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let fileLoader = (path) => {
  return {
    loader: 'file-loader',
    options: {
      name: `${path}/[name].[hash].[ext]`
    }
  }
}

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'this is Production index',
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {} },
          { loader: 'less-loader', options: { javascriptEnabled: true } },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          },
          fileLoader('static/images')
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limits: 10000
            }
          },
          fileLoader('static/videos')
        ]
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limits: 10000
          }
        }, fileLoader('static/fonts')]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};