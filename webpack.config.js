var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var ejs = require('ejs');
var fs = require('fs');

module.exports = {
    entry: './static/index.js',

    output: {
        filename: 'index.js',
        path: path.resolve('./dist'),
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.html$/,
                loader: 'file-loader'
            }
        ]
    },

    postcss: [
        require('autoprefixer-core')
    ],

    resolve: {
        modulesDirectories: ['node_modules', 'components']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css', {allChunks: true}),
        new HtmlWebpackPlugin({
            template: './static/template.ejs'
        })
    ],

    proxy: {
        context: ['/api/v1/**'],
        target: 'http://localhost:8000',
        secure: false
    }
};
