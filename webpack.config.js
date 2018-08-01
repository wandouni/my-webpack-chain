const path = require('path')

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    }
}
module.exports = config