require('dotenv/config')

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    redirectUri: process.env.GOOGLE_REDIRECT_URL
  }
)

async function verifyCode(code) {
  let { tokens } = await client.getToken(code)
  client.setCredentials({ access_token: tokens.access_token })
  const userinfo = await client.request({
    url: 'https://www.googleapis.com/oauth2/v3/userinfo'
  })
  return userinfo.data
}

module.exports = async (req, res, next) => {
  try {
    const data = req.body.data
    if ( !data || !Object.keys(data).length )
      throw new Error('Could not continue with request.')

    const { code } = data
    if ( !code )
      throw new Error('Oauth2 code is missing.')

    const userInfo = await verifyCode(code)
    req.user = userInfo
    next()

  } catch (error) {
    const errorMessage = error.message || 'Forbidden'
    res.status(401).send(errorMessage)
  }
}