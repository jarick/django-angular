const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
let config = require('./webpack.base.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

config.output.path = require('path').resolve('./assets/dist')

config.plugins = config.plugins.concat([
    new ExtractTextPlugin("style.css"),
    new BundleTracker({filename: './webpack-stats-prod.json'}),

    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),

    // keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),

    // minifies your code
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })

]);
config.postcss = function () {
    return [
        require("postcss-cssnext")(),
    ]
};
config.vue = {
    postcss: [require('postcss-cssnext')()],
    loaders: {
        css: ExtractTextPlugin.extract('vue-style-loader', 'css'),
        postcss: ExtractTextPlugin.extract('vue-style-loader', 'css'),
    }
};
config.module.loaders.push(
    {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    {test: /\.vue/, exclude: /node_modules/, loaders: ['vue']},
    {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")}
);
module.exports = config;