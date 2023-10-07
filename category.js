var express = require('express')
var router = express.Router()

var pool = require('./queries.js')

router.get('/',(req,res) => {
    pool.query('SELECT * FROM category', (error, queryRes) => {
        if (error){
            throw error
        }
        res.send(queryRes.rows)
    })
})

router.get('/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    pool.query('SELECT * FROM film f JOIN film_category fc ON f.film_id = fc.film_id JOIN category c ON c.category_id = fc.category_id WHERE LOWER(c.category_name) = $1', [category], (error, queryRes) => {
        if (error) {
            throw error;
        }
        res.send(queryRes.rows);
    });
});

module.exports = router