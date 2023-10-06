var express = require('express')
var router = express.Router()

var pool = require('./queries.js')

router.get('/',(req,res) => {
    pool.query('SELECT * FROM film', (error, queryRes) => {
        if (error){
            throw error
        }
        res.send(queryRes.rows)
    })
})

router.get('/:id', (req, res) => {
    const filmId = req.params.id;
    pool.query('SELECT * FROM film WHERE film_id = $1', [filmId], (error, queryRes) => {
        if (error) {
            throw error;
        }
        res.send(queryRes.rows);
    });
});

module.exports = router