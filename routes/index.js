const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next)=>{
    MovieModel.find()
    .then(findedMovies =>{
        res.render("movies", {data: findedMovies})
    })
    .catch(err=>console.log("Error: ", err))
})

router.get('/movies/:id',(req,res,next)=>{
    const { id } = req.params;

    MovieModel.findById(id)
    .then(idMovies =>{
        res.render("movie-details", {movie: idMovies})
    })
    .catch(err=>console.log("Error: ", err))
})



module.exports = router;
