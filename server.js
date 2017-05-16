var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var mqttClient = require('./mqtt.js');

app.set('port', (process.env.PORT || 5000));
server.listen(app.get('port'));

app.get('/deviceControl',function(req,res){
    res.send("Boing!");
});