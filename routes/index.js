const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res)=> {
    try{
      const movieList = await Movie.find()
      // res.send({movieList})
      res.render('movies', {movies: movieList})
    }catch(err){
      res.status(500).send(err);
    }
})
  
router.get('/movies/:movieId', async(req, res)=>{
    try{
      const movieList = await Movie.findById(req.params.movieId)
      res.render('movie-details',{movie: movieList})
      // res.send({movieList})
    }catch(err){
      res.status(500).send(err);
    }
})

module.exports = router;
