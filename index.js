const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 1234
const app = express()
const routes = require('./src/routes')

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:8080']
}
app.use(cors(corsOptions))
app.use('/', routes)

app.listen(port, () => console.log(`API started at port ${ port }`))