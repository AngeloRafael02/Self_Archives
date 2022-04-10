var http = require('http');
var DT = require('./dt');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Date and time: " + DT.myDateTime());
  res.end();
}).listen(8080);
