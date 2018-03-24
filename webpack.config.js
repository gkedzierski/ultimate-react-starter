const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production' ;
const cssLoader = production ?
  'css-loader?sourceMap&modules&localIdentName=[local]--[hash:base64:5]&camelCase=true&minimize=true' :
  'css-loader?sourceMap&modules&localIdentName=[path][name]__[local]--[hash:base64:5]&camelCase=true';

module.exports = {
  entry: [
    './src/app/main.tsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  mode: production ? 'production' : 'development',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoader, 'postcss-loader?sourceMap', 'sass-loader?sourceMap'],
        }),
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        exclude: /node_modules/,
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=8192&minetype=application/font-woff',
        exclude: /node_modules/,
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=8192&minetype=application/octet-stream',
        exclude: /node_modules/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=image/svg+xml',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.scss'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@sass': path.resolve(__dirname, 'src/sass'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
  },
  performance: {
    hints: false
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: production ? {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
			} : {},
    }),
  ],
};

