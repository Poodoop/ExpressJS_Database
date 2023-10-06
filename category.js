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

router.get('/:id', (req, res) => {
    const categoryId = req.params.id;
    pool.query('SELECT * FROM category WHERE category_id = $1', [categoryId], (error, queryRes) => {
        if (error) {
            throw error;
        }
        res.send(queryRes.rows);
    });
});

module.exports = router