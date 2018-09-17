const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/',(req,res,next)=>{
    Movie.find()
    .then(movies=>{
        res.render("movies-list",{movies})
    })
})

router.get('/:id',(req,res,next)=>{
    const {id} = req.params
    Movie.findById(id)
    .then(movie =>{
        res.render('movie-detail',movie)
    })
    .catch(e=>{
        console.log(e)
        next(e)
    })
})

module.exports = router;