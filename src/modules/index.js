
const db = require('../services/mysql')
const handler = require('../services/handler')

const authModule = require('./auth')({ db, handler })

module.exports = {
    auth: () => authModule
}
