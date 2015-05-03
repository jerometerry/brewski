var server = require('./server.js');
var DEFAULT_PORT = 8081;
var port = process.env.PORT || DEFAULT_PORT;
var apiUrl = "http://localhost:8080";
server.start(port, apiUrl);