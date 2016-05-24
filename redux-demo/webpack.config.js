var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

/*
 entry: {
 'common':['react', 'react-dom',path.join(__dirname, config.base + '/js/util/common')]
 },
 */
var devConfig = {
    entry: {
        client: ['./client/index.js', hotMiddlewareScript],
        common: [
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
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            }
            , {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
            }
        ]
    },
    plugins: [
        // Global modules
        // http://webpack.github.io/docs/shimming-modules.html
        //这里将很多要require的可以放在这里直接用
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM:"react-dom",
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common/common.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;