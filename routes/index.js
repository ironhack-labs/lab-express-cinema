const express = require('express');
const router = express.Router();
const Movies= require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get ('/movies', (req,res)=>{

    Movies.find().then(allMoviesFromDb=>{
        res.render ('movies',{movies:allMoviesFromDb})
    })
})

router.get('/movies/:id',(req,res)=>{
    const movieId = req.params.id;
    Movies.findById(movieId).then(resMovie=>{
        console.log(resMovie)
        res.render ('movie-details',{movie:resMovie})
        // {resMovie} === { resMovie: resMovie}
    })
})

module.exports = router;
