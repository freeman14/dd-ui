var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.entry = {
  app: './src/app/index.ts',
  stories: './src/stories'
};

config.output = {
  publicPath: '/',
  path: path.join(__dirname, "js"),
  filename: "[name].bundle.js",
  library: ["bundle", "[name]"]
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inlin
  // e assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
