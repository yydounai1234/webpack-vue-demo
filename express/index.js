const express = require('express')
const app = express()
const debug = require('debug')('koko')
const history = require('connect-history-api-fallback')

app.use(history())
app.use(express.static("./dist"))
app.get('/',function(req, res) {
    res.sendfile("./dist/index.html")
})

const server = app.listen(3000,onListening)

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
    debug('Listening on ' + bind)
  }
  