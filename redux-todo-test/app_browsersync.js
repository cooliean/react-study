var express = require('express'),
    path = require('path'),
    consolidate = require('consolidate');

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var proxyPort = 3002;
var bsPort = 8080;

app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', path.resolve('./server/views'));

app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = false;

if (isDev) {
    var webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        webpackDevConfig = require('./webpack.config.js');

    var compiler = webpack(webpackDevConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));

    require('./server/routes')(app);

    // browsersync is a nice choice when modifying only views (with their css & js)
    var bs = require('browser-sync').create();
    app.listen(proxyPort, function () {
        bs.init({
            open: false,
            ui: false,
            notify: false,
            proxy: 'localhost:' + proxyPort,
            files: ['./server/views/**'],
            port: bsPort
        });
        console.log('🌎  App (dev) is going to be running on proxyPort ' + bsPort + ' (by browsersync).');
    });

} else {
    app.use(express.static(path.join(__dirname, 'public')));
    require('./server/routes')(app);
    app.listen(proxyPort, function () {
        console.log('🌎  App (production) is now running on proxyPort ' + proxyPort + '!');

    });
}
