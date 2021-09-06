var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Lampung Kode");
});

app.listen(3000);
