const polu_ws = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM polu_ws', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject)
            return false
          }
          resolve({ polu_ws: results })
        })
      })
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('INSERT INTO polu_ws (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar a categoria ${name}`, reject)
            return false
          }
          resolve({ category: { name, id: results.insertID } })
        })
      })
    },
    update: (id, name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('UPDATE polu_ws SET name = ? WHERE id = ?', [name, id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao atualizar a categoria ${name}`, reject)
            return false
          }
          resolve({category: { name, id }, affectedRows: results.affectedRows})
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('DELETE FROM polu_ws WHERE id = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao remover a categoria de id ${id}`, reject)
            return false
          }
          resolve({ message: 'Categoria removida com sucesso!' })
        })
      })
    }
  }
}

module.exports = polu_ws
