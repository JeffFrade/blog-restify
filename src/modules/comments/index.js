
const comment = (deps) => {
  const { db, handler } = deps
  return {
    show: (post_id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM comments WHERE post_id = ?'
        const queryData = [parseInt(post_id)]
        db.query(queryString, queryData, (error, results) => {
          if (error) {
            handler.errorHandler(error, `Erro ao listar os comentários do post de id ${post_id}`, reject)
            return false
          }

          resolve({ comments: results })
        })
      })
    },

    create: (comment, name, post_id) => {
      return new Promise((resolve, reject) => {
        const queryString = 'INSERT INTO comments(comment, name, post_id) VALUES(?, ?, ?)'
        const queryData = [comment, name, parseInt(post_id)]
        db.query(queryString, queryData, (error, results) => {
          if (error || !results.affectedRows) {
            console.log(error);
            
            handler.errorHandler(error, 'Erro ao inserir o comentário', reject)
            return false
          }

          const commentObj = { comment, name, post_id, id: results.insertId }
          resolve({ comment: commentObj, affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = comment
