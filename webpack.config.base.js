const path = require('path')
// const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    // "style-loader", // creates style nodes from JS strings
                    'css-loader' // translates CSS into CommonJS
                    // "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './fonts/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['src', 'node_modules']
    },

    plugins: []
}
