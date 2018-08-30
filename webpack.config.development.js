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

module.exports = config
