const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  entry: path.resolve(__dirname, 'src') + '/index.ts',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js',
  },
  plugins: [new htmlWebpackPlugin({
    template: './src/index.html'
  })],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}