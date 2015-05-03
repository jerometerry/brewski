var server = require('./server.js');
var DEFAULT_PORT = 8081;
var port = process.env.PORT || DEFAULT_PORT;
var node_env = process.env.NODE_ENV;
var apiUrl = process.env.API_URL || "http://localhost:8080";
server.start(port, apiUrl);