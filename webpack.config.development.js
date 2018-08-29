const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const config = Object.assign({}, baseConfig)

// config.debug = true;
config.mode = 'development'

config.entry = [
    'react-hot-loader/patch',
    './src/js/index.js'
]

config.devServer = {
    historyApiFallback: true
}

config.output.publicPath = '/dist'

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(
        {
            title: 'Doomtrooper Beta Registration',
            template: 'static/index.html'
        }
    )
)

config.module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
                //"style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                //"sass-loader" // compiles Sass to CSS, using Node Sass by default
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
                        name: './fonts/[hash].[ext]',
                    },
                },
            ]
        }
    ]
};

module.exports = config
