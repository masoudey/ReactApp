const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Loadable = require('react-loadable/webpack');
const ReactLoadablePlugin = Loadable.ReactLoadablePlugin;

const clientConfig = {
    mode: 'development',
    entry: path.resolve(__dirname,'src/index.js'),

    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ReactLoadablePlugin({
            filename: './public/react-loadable.json',
          }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles.css",
          })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',

                options: {
                    presets: ['react', 'env', 'stage-0'],
                    plugins: [
                        'react-html-attrs',
                        'react-loadable/babel',
                        'transform-class-properties',
                        'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '/'
                        }
                      },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]'
                        }
                    }
                ]
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]'
                        }
                    }
                ]
              }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        contentBase: './public',
        historyApiFallback: true,
        inline: true
    }

}

const serverConfig = {
    mode: 'development',
    target: 'node',
    entry: path.resolve(__dirname,'server/index.js'),

    output: {
        path: path.resolve(__dirname),
        filename: 'server.js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'manifest',
            minChunks: Infinity
        },
    },
    plugins: [
     
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                // include: path.resolve(__dirname, 'server'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',

                options: {
                    presets: ['react', 'env', 'stage-0'],
                    plugins: [
                        'dynamic-import-node',
                        'react-loadable/babel',
                        'react-html-attrs',
                        'transform-class-properties',
                         'transform-decorators-legacy',
                        ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'public/[name].[ext]'
                        }
                    }
                ]
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'public/[name].[ext]'
                        }
                    }
                ]
              }
        ]
    },
    devtool: 'source-map',
    externals: [webpackNodeExternals()],

}

module.exports = [serverConfig, clientConfig];