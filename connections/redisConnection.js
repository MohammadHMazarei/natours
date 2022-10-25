const redis = require('redis');

// Redis connections
const client = redis.createClient();

client.connect();

client.on('error', function (err) {
  console.log(err);
});

client.on('connect', function () {
  console.log('Redis connection Established');
});

module.exports = client;
