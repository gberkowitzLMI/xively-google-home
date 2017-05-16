var mqtt = require('mqtt');
var config = require('./config.js')

var host = config.mqtt.host;
var port = config.mqtt.port;
var username = config.mqtt.username;
var password = config.mqtt.password;
var topicPrefix = config.mqtt.topic;

var client = mqtt.connect({
   host: host,
   port: port,
   clientId: username,
   username: username,
   password: password
});

exports.connectMQTT = function(){
   client.on('connect', function() {
      client.subscribe(topicPrefix);
      }, function(err) {
         console.log(err);
   });
}

exports.publishMessage = function(power){
      client.publish(topicPrefix,power);
}