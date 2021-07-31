const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send(`
    <html>
      <body>
        <h1> ACME MOVIE API </h1>
      </body>
    </html>
  `)
})

module.exports = app