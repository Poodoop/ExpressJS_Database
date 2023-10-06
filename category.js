var express = require('express')
var router = express.Router()

router.get('/',(req,res) => {
    pool.query('SELECT * FROM category', (error, queryRes) => {
        if (error){
            throw error
        }
        res.send(queryRes.rows)
    })
})

router.get('/:id',(req,res) => {
    pool.query(`SELECT * FROM category WHERE id=${req.params.id}`, (error, queryRes) => {
        if (error){
            throw error
        }
        res.send(queryRes.rows)
    })
})

module.exports = router