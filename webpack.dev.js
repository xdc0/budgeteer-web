const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(
  common,
  {
    devServer: {
      static: './dist'
    },
    mode: 'development'
  }
);
