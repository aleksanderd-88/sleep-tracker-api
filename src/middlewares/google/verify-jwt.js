require('dotenv/config')

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

module.exports = async (req, res, next) => {
  const data = req.body.data

  if ( !data || !Object.keys(data).length )
    throw new Error('Could not continue with request.')

  try {
    const verifyCredentials = async (credential) => {
      const ticket = await client.verifyIdToken({
        idToken: credential,
      })
      const payload = ticket.getPayload()
      return payload
    }
  
    const { credentials } = data
    if ( !credentials )
      throw new Error('Credentials are missing.')
    
    const userInfo = await verifyCredentials(credentials)
    if ( !userInfo )
      throw new Error('User information could not be found')

    req.user = userInfo
    next()
  } catch (error) {
    const errorMessage = error.message || 'Forbidden'
    res.status(401).send(errorMessage)
  }
}
