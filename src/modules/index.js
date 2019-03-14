
const db = require('../services/mysql')
const handler = require('../services/handler')

const authModule = require('./auth')({ db, handler })
const userModule = require('./users')({ db, handler })
const categoryModule = require('./categories')({ db, handler })

module.exports = {
    auth: () => authModule,
    user: () => userModule,
    category: () => categoryModule
}
