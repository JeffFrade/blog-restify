
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

  server.get('/users', async (req, res, next) => {
    try {
      res.send(await modules.user().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/users/find', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await modules.user().show(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('/users', async (req, res, next) => {
    try {
      const { name, email, password } = req.params
      res.send(await modules.user().create(name, email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('/users', async (req, res, next) => {
    try {
      const { id, name, email, password } = req.params
      res.send(await modules.user().update(id, name, email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('/users', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await modules.user().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}

module.exports = routes
