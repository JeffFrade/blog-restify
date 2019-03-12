
const modules = require('../modules')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send({ message: 'It\'s works' })
    next()
  })

  server.get('/auth', (req, res, next) => {
    next()
  })
}

module.exports = routes
