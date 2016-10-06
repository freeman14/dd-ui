var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/index.ts',
        stories: './src/stories'
    },
    output: {
        filename: '[name].js',
        path: 'dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/preview.html', to: 'preview.html' },
            { from: './src/index.html', to: 'index.html' }
        ]),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        })
    ],
    module: {
        loaders: loaders
    }
};