var express    = require("express");
var app        = express();
var routes     = require('./Routes');

var router = express.Router();
app.use('/', router);
app.use(express.static('bower_components'));
app.use('/bower', express.static('bower_components'));
app.use('/jsx', express.static('public/js/build'));
app.set('view engine', 'jade');

function start(port) {
  	routes.setup(router);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;