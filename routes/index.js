const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {

    Movie.find()
      .then(allTheMovies => res.render("movies", { allTheMovies }))
      .catch(err => console.log(err))
  
  });

  router.get("/movie/:id", (req, res, next) => {

    //Se puede acceder a los params mediante req.params
    // const idParam = req.params.id
    const { id } = req.params
  
    Movie.findById(id)
      .then(movie => res.render("movie", movie))
      .catch(err => console.log(err))
  
  });

module.exports = router;
