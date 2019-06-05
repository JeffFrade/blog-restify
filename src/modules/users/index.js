
const sha1 = require('sha1')

const user = deps => {
  const { db, handler} = deps
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT id, name, email FROM users'
        db.query(queryString, [], (error, results) => {
          if (error || !results.length) {
            handler.errorHandler(error, 'Erro ao listar usuários', reject)
            return false
          }

          resolve({ users: results })
        })
      })
    },

    create: (name, email, passwd) => {
      return new Promise((resolve, reject) => {
        const password = sha1(passwd)

        const queryString = 'INSERT INTO users(name, email, password) VALUES(?, ?, ?)'
        const queryData = [name, email, sha1(password)]

        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHandler(error, `Erro ao inserir o usuário ${name} de E-mail ${email}`, reject)
            return false
          }

          const user = { name, email, id: results.insertId }

          resolve({ user, affectedRows: results.affectedRows })
        })
      })
    },

    show: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT id, name, email FROM users WHERE id = ?'
        const queryData = [id]

        db.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {
            handler.errorHandler(error, `Erro ao localizar o usuário de id ${id}`, reject)
            return false
          }          

          resolve({ user: results[0] })
        })
      })
    },

    update: (id, name, email, passwd) => {
      return new Promise((resolve, reject) => {
        const password = sha1(passwd)
        const queryString = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?'
        const queryData = [name, email, sha1(password), id]
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHandler(error, `Erro ao atualizar o usuário de id ${id}`)
            return false
          }

          const user = { name, email, id }

          resolve({ user, affectedRows: results.affectedRows })
        })
      })
    },

    del: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'DELETE FROM users WHERE id = ?'
        const queryData = [id]

        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHandler(error, `Erro ao remover o usuário de id ${id}`, reject)
            return false
          }

          resolve({ user: { message: 'Usuário removido com sucesso!' }, affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = user
