
var express = require("express");
const Movie = require("../models/Movie.model");
var router = express.Router();


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//mostrar
router.get('/movies', async (req, res, next) => {
    try{
      let movie = await Movie.find()
        res.render('movies', {movie});
    }catch(err){
        console.log('Error while getting the movies from the DB: ', err);
    }
  });

  router.get('/movies/:id', async (req, res, next) => {
    try{
      let movie = await Movie.findById(req.params.id)
        res.render('movie-detail', {movie});
    }catch(err){
        console.log('Error while getting the movies from the DB: ', err);
    }
  });


module.exports = router;

