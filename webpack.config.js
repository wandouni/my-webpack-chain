const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8088,
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            // 加载css
            {
                test: /\.less$/,
                // css-loader: 加载.css文件
                // style-loader: 使用<style>将css-loader内部样式注入到我们的HTML页面
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
}
module.exports = config