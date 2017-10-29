const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')

server.use(restify.plugins.bodyParser())
routes(server)
server.pre(cors.preflight)
server.use(cors.actual)

module.exports = server
