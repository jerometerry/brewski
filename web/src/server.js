var express    = require("express");
var app        = express();
var routes     = require('./routes.js');
var staticData = require("./staticData.js");
var router     = express.Router();

app.use('/', router);
app.set('view engine', 'ejs');
staticData.init(app, express);

function start(port, apiUrl) {
  	routes.setup(router, apiUrl);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;