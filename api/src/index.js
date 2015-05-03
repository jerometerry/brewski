var server = require('./server.js');
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;
server.start(port);