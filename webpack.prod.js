const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

console.log(process);
console.log(process.env);
console.log(process.env.TEST_KEK);

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "fs": false,
      "path": false,
      "http": false,
      "https": false,
      "zlib": false,
      "os": false,
      "tty": require.resolve('tty-browserify'),
      "timers": false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    ],
  },
  plugins: [
    new Dotenv({
      systemvars: true,
      ignoreStub: true,
    }),
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV !== 'production' ? 'development' : 'production'),
        'API_EXTERNAL': JSON.stringify(process.env.API_EXTERNAL),
        'TEST_KEK': JSON.stringify(process.env.TEST_KEK),
        'TEST_PISJA': JSON.stringify('TEST_PISJA2'),
        'TEST_PISJA3': JSON.stringify('TEST_PISJA23'),
        'API_INTERNAL': JSON.stringify(process.env.API_INTERNAL),
      },
    }),
  ],
};
