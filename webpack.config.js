var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/app',
    storiesAPI: './src/stories-api.js',
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: []
};
