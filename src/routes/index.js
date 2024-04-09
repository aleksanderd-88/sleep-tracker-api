const router = require('express').Router()
const controllers = require('../controllers')

module.exports = router.get('/api/v1/health-check', controllers.healthCheck)