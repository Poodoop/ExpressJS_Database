var express = require('express')
var app = express()

var pool = require('./queries.js')

var film = require('./film.js')
app.use('/film', film)

var category = require('./category.js')
app.use('/category', category)

pool.connect((err,res) => {
    console.log(err)
    console.log('connected')
})

app.listen(3000)