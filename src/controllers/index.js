const healthCheck = require('./api/v1/health-check')
const googleInit = require('./api/v1/google/one-tap/initialize')

module.exports = {
  healthCheck,
  googleInit
}