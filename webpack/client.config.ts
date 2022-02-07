import path from 'path';

import CompressionPlugin from 'compression-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Configuration, Entry, WebpackPluginInstance as Plugin } from 'webpack';
import { InjectManifest } from 'workbox-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';

const config: Configuration = {
  entry: [
    IS_DEV && 'react-hot-loader/patch',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'client'),
  ].filter(Boolean) as unknown as Entry,
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
    rules: [
      {
        test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    !IS_DEV && new CompressionPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'static', to: 'static' }],
    }),
    new InjectManifest({
      swSrc: `/public/cacheServiceWorker.js`,
      swDest: 'cacheServiceWorker.js',
      include: [/\.html$/, /\.js$/, /\.css$/, /\.woff2$/, /\.jpg$/, /\.png$/],
      maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
    }),
  ].filter(Boolean) as Plugin[],
  devtool: 'source-map',
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
  mode: IS_DEV ? 'development' : 'production',
};

export default config;
