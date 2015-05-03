var express    = require("express");
var app        = express();
var routes     = require('./routes.js');

var router = express.Router();
app.use('/', router);
app.use('/bower', express.static('bower_components'));
app.use('/favicon.ico', express.static('img/favicon.ico'));
app.use(express.static('img'));
app.use(express.static('views'));
app.use('/jsx', express.static('views/react'));
app.set('view engine', 'ejs');

function start(port, apiUrl) {
  	routes.setup(router, apiUrl);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;