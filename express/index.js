var express = require('express')
var app = express()
var debug = require('debug')('koko')

app.use(express.static("./dist"))

app.get('/',function(req, res) {
    res.sendfile("./dist/index.html")
})

const server = app.listen(3000,onListening)

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
    debug('Listening on ' + bind)
  }
  