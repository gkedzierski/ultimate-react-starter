const webpackMerge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = webpackMerge(config, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /\.spec\.tsx?/, /test-utils\.ts/],
        use: ['istanbul-instrumenter-loader?esModules=true'],
        enforce: 'post',
      },
    ],
  },
});
