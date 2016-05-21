var express = require('express'),
    router = express.Router();

module.exports = function (app) {
    app.use('/', router.get('/', function(req, res) {
        res.render('./');//这里的page1 是目录啊
    }));
    app.use('/index2', router.get('/index2', function(req, res) {
        res.render('./index2.html');//这里的page1 是目录啊
    }));
    //app.use('/page2', require('./page2'));
};
