const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'babel-preset',
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
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true,})
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
}