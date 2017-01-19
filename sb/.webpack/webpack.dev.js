var loaders = require("./loaders");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var sprite = require('sprite-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client?noInfo=true',
            './sb/index.ts'
        ],
        // app: ['./sb/index.ts'],
        stories: './stories'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'sb-dist'),
        publicPath: '/'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    // devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin([
            { from: './sb/.static/preview.html', to: 'preview.html' },
            { from: './sb/.static/index.html', to: 'index.html' }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new sprite({
          'source' : path.resolve(__dirname, '..', '..', 'src/assets/images/'),
          'imgPath': path.resolve(__dirname, '..', '..', 'src/styles/sprites/'),
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
