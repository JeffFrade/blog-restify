
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

const auth = deps => {
  return {
    authenticate: (email, passwd) => {      
      return new Promise((resolve, reject) => {
        const password = sha1(passwd)
        
        const { db, handler } = deps
        const queryString = 'SELECT id, name, email FROM users WHERE email = ? AND `password` = ?'
        const queryData = [email, password]
        
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {    
            handler.errorHandler(error, 'Usuário ou senha incorretos', reject)
            return false
          }

          const { id, name, email } = results[0]

          const token = jwt.sign({ id, name, email }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
          resolve({ token })
        })
      })
    }
  }
}

module.exports = auth
