const express = require('express')
const app = express()

const { models: { Actor, Movie, Role }} = require('./db')

app.get('/', (req, res, next) => {
  res.send(`
    <html>
      <body>
        <h1> ACME MOVIE API </h1>
      </body>
    </html>
  `)
})
app.get('/movies', async(req, res, next)=>{
  const allMovies = await Movie.findAll()
  res.send(allMovies)
})



module.exports = app