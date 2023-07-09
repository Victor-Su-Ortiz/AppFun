var express = require('express');
var app = express();
const path = require('path');

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});