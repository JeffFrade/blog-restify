
const modules = require('../modules')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send({ message: 'It\'s works' })
    next()
  })

  server.post('/auth', async (req, res, next) => {
    try {
    const { email, password } = req.params
    res.send(await modules.auth().authenticate(email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}

module.exports = routes
