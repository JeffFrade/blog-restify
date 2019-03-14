
const categories = deps => {
  const { db, handler } = deps
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM categories'
        db.query(queryString, [], (error, results) => {
          if (error || !results.length) {
            handler.errorHanlder(error, 'Erro ao listar categorias', reject)
            return false
          }

          resolve({ categories: results })
        })
      })
    },

    create: (name) => {
      return new Promise((resolve, reject) => {
        const queryString = 'INSERT INTO categories(name) VALUES(?)'
        const queryData = [name]

        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHanlder(erro, `Erro ao cadastrar a categoria ${name}`, reject)
            return false
          }

          const category = { name, id: results.insertId }

          resolve({ category, affectedRows: results.affectedRows })
        })
      })
    },

    show: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM categories WHERE id = ?'
        const queryData = [id]
        
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {
            console.log(results[0])
            handler.errorHanlder(error, `Erro ao localizar a categoria de id ${id}`, reject)
            return false
          }

          resolve({ category: results[0] })
        })
      })
    },

    update: (id, name) => {
      return new Promise((resolve, reject) => {
        const queryString = 'UPDATE categories SET name = ? WHERE id = ?'
        const queryData = [name, id]

        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHanlder(error, `Erro ao alterar a categoria de id ${id}`, reject)
            return false
          }
        })

        const category = { name, id }

        resolve({ category })
      })
    },

    del: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'DELETE FROM categories WHERE id = ?'
        const queryData = [id]

        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHanlder(error, `Erro ao remover a categoria de id ${id}`, reject)
            return false
          }

          resolve({ category: { message: 'Categoria removida com sucesso!' }, affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = categories
