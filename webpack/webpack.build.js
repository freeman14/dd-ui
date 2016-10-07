var loaders = require("./loaders");
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: {
    'dd-ui': ['./src/lib/index.ts'],
    app: './src/index.ts',
    stories: './src/stories'
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
    'moment': 'moment'
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new NgAnnotatePlugin({
      add: true
    }),
    new CopyWebpackPlugin([
      { from: './src/preview.html', to: 'preview.html' },
      { from: './src/index.html', to: 'index.html' }
    ])
  ],
  module: {
    loaders: loaders,
    noParse: [ "angular" ]
  }
};
