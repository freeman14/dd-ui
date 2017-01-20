var loaders = require("./loaders");
var webpack = require('webpack');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var sprite = require('sprite-webpack-plugin');

module.exports = {
  entry: {
    'dd-ui': ['./src/index.ts'],
    'dd-styles': ['./src/styles.ts']
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
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      verbose: true
    }),
    new NgAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin({
      warning: false,
      mangle: true,
      comments: false
    })
    ,new sprite({
      'source' : path.resolve(__dirname, '..', 'src/assets/images/'),
      // 'imgPath': path.resolve(__dirname, '..', 'src/assets/sprites/'),
      'imgPath': path.resolve(__dirname, '..', 'dist/images/'),
      'cssPath': path.resolve(__dirname, '..', 'src/styles/sprites/'),
      'prefix': 'dd-image',
      'spriteName': 'dd-sprite',
      'processor': 'less'
    })
    // ,new CopyWebpackPlugin([
    //   { from: './src/assets/sprites/dd-sprite-base.png', to: 'images/dd-sprite-set.png' }
    // ])
  ],
  module: {
    loaders: loaders,
    noParse: ["angular"]
  }
};
