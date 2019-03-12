
require('dotenv').config()
const server = require('./server')

server.server.setTimeout(60000 * 5);

server.listen(process.env.PORT || 3000)
