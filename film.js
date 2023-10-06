var express = require('express')
var router = express.Router()

router.get('/',(req,res) => {
    pool.query('SELECT * FROM film', (error, queryRes) => {
        if (error){
            throw error
        }
        res.send(queryRes.rows)
    })
})

router.get('/:id',(req,res) => {
    pool.query(`SELECT * FROM film WHERE id=${req.params.id}`, (error, queryRes) => {
        if (error){
            throw error
        }
        res.send(queryRes.rows)
    })
})

module.exports = router