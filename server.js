var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var mqttClient = require('./mqtt.js');

app.set('port', (process.env.PORT || 5000));
server.listen(app.get('port'));

var turnLightOff = function(callback){

}

var turnLightOn = function(callback){
    mqttClient.publishMessage(1)
}

app.get('/deviceControl',function(req,res){
    var powerState = req.query["power"];
    if(powerState)
        mqttClient.publishMessage(1);
    else
        mqttClient.publishMessage(0);

    res.end();
});