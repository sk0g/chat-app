var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));


http.listen(3000);
