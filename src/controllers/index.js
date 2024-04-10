const healthCheck = require('./api/v1/health-check')
const googleInit = require('./api/v1/google/one-tap/initialize')
const user = require('./api/v1/user')

module.exports = {
  healthCheck,
  googleInit,
  user
}