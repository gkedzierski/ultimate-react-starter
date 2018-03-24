const webpack = require('webpack');
const webpackConfig = require('./webpack.config.test');

const COVERAGE = !!process.env.COVERAGE;

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'tests.webpack.js',
      { pattern: '**/*.png', watched: false, included: false, served: false },
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: COVERAGE ? ['coverage-istanbul', 'dots'] : ['dots'],
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary', 'json', 'clover'],
      dir: 'coverage',
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html',
        },
      },
      debug: true
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: true,
      noInfo: true,
    },
  });
};
