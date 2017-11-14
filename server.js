var http = require('http');
var path = require('path');
var URL = require('url');
var express = require('express');
var app = express();
app.use(express.static(__dirname));

var port = process.env.PORT || 3000;
app.get('/api/whoami', function(req, res){
  var IP = 
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.get('accept-language');
  //var OSmatch = new RegExp(/^\(((Windows)|(Linux)|(Macintosh))[^\/]+\)$/);
  var OS = req.get('user-agent');
  var info = {ipaddress: IP, language : lang, software : OS, /*Operation: OS.match(OSmatch)*/};
  res.json(info);
  
});

app.get('/', function(req, res){
    var indexhttp = path.join(__dirname, 'index.html');
    res.send(indexhttp);
});

app.listen(port, function () {
  console.log('Node app listening on port ' + port + '!');
});
