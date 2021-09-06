var http = require('http');

http.createServer(function (req, res) {
  res.write('Lampung Kode'); 
  res.end();
}).listen(8080);
