const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = webpackMerge(config, {
});
