var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.ts',
        stories: './src/stories',
        'dd-iu': './src/lib/index.ts'
    },
    output: {
        filename: '[name].js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/preview.html', to: 'preview.html' },
            { from: './src/index.html', to: 'index.html' }
        ]),
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        )
    ],
    module: {
        loaders: loaders
    }
};