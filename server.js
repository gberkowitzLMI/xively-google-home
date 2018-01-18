var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var config = require('./config.js');
var mqttClient = require('./mqtt.js');

app.set('port', (process.env.PORT || 5000));
server.listen(app.get('port'));


app.post('/gAssistant', function(req,res){
    console.log("here");
    console.log(req)
})

app.get('/deviceControl',function(req,res){
    var powerState = req.query["power"];
    if(powerState && (powerState =="on" || powerState=="On" || powerState == "ON")){
        mqttClient.publish(config.mqtt.topic,"1");
        res.send("ON");
    }
    else{
        mqttClient.publish(config.mqtt.topic,"0");
        res.send("OFF");
    }
});