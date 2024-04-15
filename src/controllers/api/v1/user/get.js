require('dotenv/config')
const JWT = require('jsonwebtoken')
const omit = require('lodash/omit')

module.exports = (req, res) => {
  try {
    const user = omit(req.user, 'exp') //- Remove google expiration field and use JWT's instead
    const token = JWT.sign(user, process.env.SECRET, { expiresIn: '1h' })

    res.status(200).send({ ...user, token })
  } catch (error) {
    res.status(500).send(error)
  }
}