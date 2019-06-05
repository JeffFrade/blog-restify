
const posts = (deps) => {
  const { db, handler } = deps
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM posts'
        db.query(queryString, [], (error, results) => {
          if (error) {
            handler.errorHandler(error, 'Erro ao listar posts', reject)
            return false
          }
          
          resolve({ posts: results })
        })
      })
    },

    create: (title, post, category_id, image) => {
      return new Promise((resolve, reject) => {
        const queryString = 'INSERT INTO posts(title, post, category_id, image) VALUES (?, ?, ?, ?)'
        const queryData = [title, post, parseInt(category_id), image]
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHandler(error, `Erro ao inserir o post ${title}`, reject)
            return false
          }

          const user = { title, post, category_id, image, id: results.insertId }
          resolve({ user, affectedRows: results.affectedRows })
        })
      })
    },

    show: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM posts WHERE id = ?'
        const queryData = [id]
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {
            handler.errorHandler(error, `Erro ao localizar o post de id ${id}`, reject)
            return false
          }

          resolve({ post: results[0] })
        })
      })
    },

    update: (id, title, post, category_id, image) => {
      return new Promise((reject, resolve) => {
        const queryString = 'UPDATE posts SET title = ?, post = ?, category_id = ?, image = ? WHERE id = ?'
        const queryData = [title, post, category_id, image, id]
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHandler(error, `Erro ao atualizar o post de id ${id}`, reject)
            return false
          }

          const postObj = { title, post, category_id, image, id }
          resolve({ post: postObj, affectedRows: results.affectedRows })
        })
      })
    },

    del: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'DELETE FROM posts WHERE id = ?'
        const queryData = [id]
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            handler.errorHandler(error, `Erro ao remover o post de id ${id}`, reject)
            return false
          }

          resolve({ post: { message: 'Post removido com sucesso!' }, affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = posts
