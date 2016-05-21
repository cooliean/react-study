var express = require('express'),
    router = express.Router();

console.log("page1.js.router");
router.get('/', function(req, res) {
    res.render('page1');//这里的page1 是目录啊
});

module.exports = router;