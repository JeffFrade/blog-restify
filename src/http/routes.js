
const modules = require('../modules')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send({ message: 'It\'s works' })
    next()
  })

  server.post('/auth', async (req, res, next) => {
    const { email, password } = req.params
    res.send(await modules.auth.authenticate(email, password))
    next()
  })
}

module.exports = routes
