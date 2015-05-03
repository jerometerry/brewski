var server = require('./Server');
var DEFAULT_PORT = 8081;
var port = process.env.PORT || DEFAULT_PORT;
server.start(port);