var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = app;