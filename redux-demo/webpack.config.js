var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        client: ['./client/index.js', hotMiddlewareScript],
        vendor: [
            'react',
            'react-dom',
            hotMiddlewareScript,
        ],
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve('./public'),//这个是打包压缩后的路径
        publicPath: publicPath////这个运行调试的地址
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
            , {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'common.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;