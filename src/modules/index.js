
const db = require('../services/mysql')
const handler = require('../services/handler')

const authModule = require('./auth')({ db, handler })
const userModule = require('./users')({ db, handler })
const categoryModule = require('./categories')({ db, handler })
const postModule = require('./posts')({ db, handler })
const commentModule = require('./comments')({ db, handler })

module.exports = {
  auth: () => authModule,
  user: () => userModule,
  category: () => categoryModule,
  post: () => postModule,
  comment: () => commentModule
}
