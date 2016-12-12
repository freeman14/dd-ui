var loaders = require("./loaders");
var webpack = require('webpack');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

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
        new NgAnnotatePlugin({ add: true })
    ],
    module: {
        loaders: loaders,
        noParse: ["angular"]
    }
};
