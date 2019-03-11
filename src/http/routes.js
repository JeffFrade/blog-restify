const routes = (server) => {
  server.get('/', (req, res, next) => {
      res.send({ message: 'It\'s works' })
      next()
  })
}

module.exports = routes
