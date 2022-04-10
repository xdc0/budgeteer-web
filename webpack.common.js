const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.tsx?$/,
      use: 'ts-loader'
    }]
  },
  output: {
    filename: 'budgeteer.js',
    path: path.resolve(
      __dirname,
      'dist'
    )
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Budgeteer - App'
  })],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};
