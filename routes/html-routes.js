const path = require('path');


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};