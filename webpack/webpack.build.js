var loaders = require("./loaders");
var webpack = require('webpack');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: {
    'dd-ui': ['./src/index.ts']
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: 'dist'
  },
  devtool: 'source-map',
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  externals: {
    'angular': 'angular',
    'moment': 'moment',
    'moment-timezone': 'moment' //todo: check if it works
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new NgAnnotatePlugin({ add: true })
  ],
  module: {
    loaders: loaders,
    noParse: ["angular"]
  }
};
