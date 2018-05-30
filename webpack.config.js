const webpack = require('webpack');
const path = require('path');

const clientConfig = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',

                options: {
                    presets: ['react', 'env', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                  'file-loader'
                ]
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader'
                ]
              }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: './public',
        historyApiFallback: true,
        inline: true
    }

}

module.exports = clientConfig;