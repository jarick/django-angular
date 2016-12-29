const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
let config = require('./webpack.base.config.js');

// Use webpack dev server
config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    '../assets/index'
];

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/assets/bundles/';

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
]);

config.vue = {
    postcss: [require('postcss-cssnext')()]
};
// Add a loader for JSX files with react-hot enabled
config.module.loaders.push(
    {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    {test: /\.css$/, loader: "css-loader!postcss-loader"},
    {test: /\.vue/, exclude: /node_modules/, loaders: ['vue']}
);

module.exports = config;