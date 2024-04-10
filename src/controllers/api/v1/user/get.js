module.exports = (req, res) => {
  try {
    const user = req.user
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}