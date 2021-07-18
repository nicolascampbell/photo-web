var express = require('express');
var path = require('path');
const history = require('connect-history-api-fallback')

var app = express();
//express.static(path.join(__dirname, 'public'))
const staticFileMiddleware = express.static(path.join(__dirname, '/public'))
app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/index.html'))
})

module.exports = app;
