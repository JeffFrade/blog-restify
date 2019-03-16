
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
      console.log(error);
      
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

  server.get('/users/find/:id', async (req, res, next) => {
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

  server.get('/categories', async (req, res, next) => {
    try {
      res.send(await modules.category().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/categories/find/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await modules.category().show(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('/categories', async (req, res, next) => {
    try {
      const { name } = req.params
      res.send(await modules.category().create(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('/categories', async (req, res, next) => {
    try {
      const { name, id } = req.params
      res.send(await modules.category().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('/categories', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await modules.category().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/posts', async (req, res, next) => {
    try {
      res.send(await modules.post().all())
    } catch (error) {
      res.send(error)
    }

    next()
  })

  server.get('/posts/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await modules.post().show(id))
    } catch (error) {
      res.send(error)
    }

    next()
  })

  server.post('/posts', async (req, res, next) => {
    try {
      const { title, post, category_id, image } = req.params
      res.send(await modules.post().create(title, post, category_id, image))
    } catch (error) {
      res.send(error)
    }

    next()
  })

  server.put('/posts', async (req, res, next) => {
    try {
      const { id, title, post, category_id, image } = req.params
      res.send(await modules.post().update(id, title, post, category_id, image))
    } catch (error) {
      res.send(error)
    }

    next()
  })

  server.del('/posts', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await modules.post().del(id))
    } catch (error) {
      res.send(error)
    }

    next()
  })
}

module.exports = routes
