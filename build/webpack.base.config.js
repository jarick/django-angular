const path = require("path");
const webpack = require('webpack');

module.exports = {
    context: __dirname,

    entry: '../assets/index',

    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [

    ],

    postcss: {
        plugins: [require('postcss-cssnext')()]
    },

    module: {
        loaders: []
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
};