var config = {};

config.mqtt = {};

config.mqtt.host = process.env.MQTT_HOST || 'mqtts://broker.xively.com:8883';
config.mqtt.username = process.env.MQTT_USER || '06fa634d-911b-4ed0-a0ad-cefc51b1dd41';
config.mqtt.password = process.env.MQTT_PASS || 'vpp7ygQa9dHjXKCbFUlWBSGk11K58q9TdYLP4j4ri/Q=';
config.mqtt.topic = process.env.MQTT_TOPIC || 'xi/blue/v1/2768f572-30b5-4df1-80fa-e19b46da140d/d/5f560722-072c-4e31-844f-bb88774735f3/power';


module.exports = config;
