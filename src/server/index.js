
const restify = require('restify')
const server = restify.createServer();
const routes = require('../http/routes')
const cors = require('./cors')
const jwt = require('../http/middlewares/jwt')

const exclusions = ['/auth', '/']

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())
server.use(jwt({ exclusions }))

routes(server)

module.exports = server
