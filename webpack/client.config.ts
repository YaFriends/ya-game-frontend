import path from 'path';
import { Configuration, Entry, WebpackPluginInstance as Plugin } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';


import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';


/*const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');*/

const config: Configuration = {
  entry: ([
    IS_DEV && 'react-hot-loader/patch',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'client'),
  ].filter(Boolean) as unknown) as Entry,
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [fileLoader.client, cssLoader.client, jsLoader.client],
  },
  /*plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      files: ['src'],
      fix: true,
    }),
    new CopyPlugin({
      patterns: [{ from: 'static', to: 'static' }],
    }),
  ],*/
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    !IS_DEV && new CompressionPlugin(),
  ].filter(Boolean) as Plugin[],
  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },
};

export default config;