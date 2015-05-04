var express    = require("express");
var api        = require('./api.js');
var staticData = require("./staticData.js");
var app        = express();
var router     = express.Router();

app.set('view engine', 'ejs');
app.use('/', router);
staticData.init(app, express);

function start(port, apiUrl) {
  	api.setup(router, apiUrl);
    app.listen(port);
	exports.port = port;
}

exports.start = start;
exports.app = app;