export default {
  client: {
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
  server: {
    test: /\.s[ac]ss$/i,
    loader: 'null-loader',
  }
}