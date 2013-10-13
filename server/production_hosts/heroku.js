var config = {}

config.port = process.env.OPENSHIFT_NODEJS_PORT;
config.redis_port = process.env.HEROKU_REDIS_PORT
config.redis_host = process.env.HEROKU_REDIS_HOST

config.isActive = function() {
  return process.env.HEROKU !== undefined;
}

module.exports = config;
