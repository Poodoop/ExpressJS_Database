var express = require('express')
var app = express()

var pool = require('./queries.js')

pool.connect((err,res) => {
    console.log(err)
    console.log('connected')
})

var film = require('./film.js')
app.use('/film', film)

var category = require('./category.js')
app.use('/category', category)

app.listen(3000)