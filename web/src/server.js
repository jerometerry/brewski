var express    = require("express");
var app        = express();
var routes     = require('./routes.js');

var router = express.Router();
app.use('/', router);
app.use(express.static('bower_components'));
app.use('/bower', express.static('bower_components'));
app.use('/jsx', express.static('public/js/build'));
app.use('/images', express.static('public/img'));
app.use('/favicon.ico', express.static('public/img/favicon.ico'));
app.set('view engine', 'ejs');

function start(port, apiUrl) {
  	routes.setup(router, apiUrl);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;