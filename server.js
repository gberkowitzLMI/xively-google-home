var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var config = require('./config.js');
var mqttClient = require('./mqtt.js');

app.set('port', (process.env.PORT || 5000));
server.listen(app.get('port'));


app.post('/gAssistant', function(req,res){
    console.log(req.body.originalRequest.data.user)
    console.log(req.body.result.contexts[0])
    console.log(req.body.result.contexts[1])
    console.log(req.body.result.contexts[2])
    var responseData = {
        speech: "Here's some info",
        displayText: "Displaying some info",
        data: {"google":{"is_ssml":true,"no_input_prompts":[]}},
        contextOut: [],
        source: "",
        followupEvent: {}
    };
    res.send(responseData)
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