var express    = require("express");
var app        = express();
var routes     = require('./Routes');

var router = express.Router();
app.use('/api', router);

function start(port) {
  	routes.setup(router);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;