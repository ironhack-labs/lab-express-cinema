const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res,next)=>{
    Movie.find()
    .then(movies => {
        res.render('movies',{ movies })
    })
    .catch(error=> console.log("ocurrio un error", error))
})

router.get('/:id/detail', (req,res,next)=>{
    const { id } = req.params
    Movie.findById(id)
    .then(movie=>{
        res.render('movieDetail',{ movie })
    })
    .catch(error=> console.log("ocurrio un error", error))
})




module.exports = router;
