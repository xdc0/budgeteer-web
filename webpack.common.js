const path = require('path');
const DotEnv = require('dotenv-webpack');
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
    template: 'src/index.html',
    title: 'Budgeteer - App'
  }), new DotEnv({
    path: './.env'
  })],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};
