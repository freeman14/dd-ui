var loaders = require("./loaders");
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');
var sprite = require('sprite-webpack-plugin');

module.exports = {
    entry: {
        app: ['./sb/index.ts'],
        stories: './stories'
    },
    output: {
        filename: '[name].js',
        path: 'sb-build',
        publicPath: ''
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: false,
    plugins: [
        new CopyWebpackPlugin([
            { from: './sb/.static/preview.html', to: 'preview.html' },
            { from: './sb/.static/index.html', to: 'index.html' }
        ]),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
        new sprite({
          'source' : path.resolve(__dirname, '..', '..', 'src/assets/images/'),
          'imgPath': path.resolve(__dirname, '..', '..', 'src/assets/sprites/'),
          'cssPath': path.resolve(__dirname, '..', '..', 'src/styles/sprites/'),
          'prefix': 'dd-image',
          'spriteName': 'dd-sprite',
          'processor': 'less'
        })
    ],
    module: {
        loaders: loaders
    }
};
