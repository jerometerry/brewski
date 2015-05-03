var express    = require("express");
var app        = express();
var routes     = require('./routes.js');

var router = express.Router();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', router);

function start(port) {
  	routes.setup(router);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;