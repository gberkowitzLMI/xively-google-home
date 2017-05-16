var mqtt = require('mqtt');
var config = require('./config.js')

var host = config.mqtt.host;
var port = config.mqtt.port;
var username = config.mqtt.username;
var password = config.mqtt.password;

var client = mqtt.connect(host,{
   username: username,
   password: password,
   rejectUnauthorized: false //not for production
});

client.on('connect', function() {
      console.log('connected');
}, function(err) {
      console.log(err);
});

client.on('disconnect',function(){
      console.log("MQTT disconnected");
});

client.on('error', function(err){
      console.log(err);
});


module.exports = client;