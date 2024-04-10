require('dotenv/config')

module.exports = (req, res) => {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID
    if ( !clientId )
      throw new Error('Client id is missing')

    res.status(200).send({ clientId })
  } catch (error) {
    const errorMessage = error.message || 'Something went wrong'
    res.status(500).send(errorMessage)
  }
}