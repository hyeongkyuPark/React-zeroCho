const path = require('path');
const webpack = require('webpack');
const RefreshwebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'word-relay',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['> 5% in KR'],
                                }
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    plugins: ['react-refresh/babel'],
                }
            }
        ]
    },
    plugins: [
        new RefreshwebpackPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
    },
}