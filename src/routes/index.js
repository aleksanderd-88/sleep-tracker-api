const router = require('express').Router()
const controllers = require('../controllers')
const middleware = require('../middlewares')

module.exports = router.get('/api/v1/health-check', controllers.healthCheck)

module.exports = router.get('/api/v1/google/one-tap/initialize', controllers.googleInit)
module.exports = router.post('/api/v1/google/user/get', middleware.google.verifyJWT, controllers.user.get)

module.exports = router.get('/api/v1/user/auth', middleware.verifyToken, controllers.user.get)
