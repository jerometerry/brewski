var server = require('./Server');
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;
server.start(port);