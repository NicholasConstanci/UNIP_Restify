
const db = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Always, master~')
    next()
  })

  server.get('categoria', async (req, res, next) => {
    try {
      res.send(await db.polu_ws().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('categoria', async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.polu_ws().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.put('categoria', async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.polu_ws().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.del('categoria', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.polu_ws().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}

module.exports = routes
