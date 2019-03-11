
const restify = require('restify')

const server = restify.createServer();

server.get('/', (req, res, next) => {
  res.send({ message: 'It\'s works' })
  next()
})

server.listen(3000)
