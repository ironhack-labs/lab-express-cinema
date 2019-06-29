const express = require ("express")
const mongoose = require ("mongoose")
const Movie = require ("../models/Movie")

const router = express.Router();
router.get('/', (req, res, next)=>{
    console.log('MOVIESSS')
    Movie.find({})
        .then(resp =>{
            console.log(res)
            res.json( resp )
        })
})

router.get('/:id', (req, res, next) =>{
    Movie.findById({_id:req.params.id})
    .then(resultado => {
        res.json(resultado)
    })
})
module.exports = router;
