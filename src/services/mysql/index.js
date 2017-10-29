
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'b5c4a735bdcf23',
  password: '10a7d23c',
  database: 'heroku_eb0161150ae89ff'
  // mysql://b5c4a735bdcf23:10a7d23c@us-cdbr-iron-east-05.cleardb.net/heroku_eb0161150ae89ff?reconnect=true
  // pw: 10a7d23c
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}
const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule
}
