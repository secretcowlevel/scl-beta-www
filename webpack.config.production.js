const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
const baseConfig = require('./webpack.config.base')

const config = Object.assign({}, baseConfig)

// config.debug = true;
config.mode = 'production'


config.entry = [
    './src/js/'
]


config.plugins.push(
    new HtmlWebpackPlugin(
        {
            title: 'Doomtrooper Beta Registration',
            template: 'static/prod.html'
        }
    )
)

module.exports = config
