
require('dotenv').config()
const server = require('./server')

server.listen(process.env.APP_PORT)
