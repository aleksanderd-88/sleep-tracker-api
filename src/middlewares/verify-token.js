require('dotenv/config')
const JWT = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const bearer = req.headers.authorization
  if ( typeof bearer === 'undefined' )
    return res.status(401).send('Not authorized')
  
  const token = bearer.replace('Bearer ', '')

  JWT.verify(token, process.env.SECRET, (err, data) => {
    if ( err )
      return res.status(401).send('Not authorized')
    
    req.user = data
    next()
  })
}