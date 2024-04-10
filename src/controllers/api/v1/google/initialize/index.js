require('dotenv/config')

module.exports = (req, res) => {
  try {
    res.status(200).send({
      clientId: process.env.GOOGLE_CLIENT_ID
    })
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}