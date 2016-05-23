var path = require("path");
module.exports = (app) => {
    // app.use('/', router.get('/', function(req, res) {
    //     res.render('./index.html');//这里的page1 是目录啊
    // }));
    app.get('/', (req, res) => {
        res.render('./index.html');//这里的page1 是目录啊
    });
    app.get('/cooliean', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/cooliean.html'));
        //res.render('./cooliean.html');//这里的page1 是目录啊
    });
};
