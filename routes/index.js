const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    
    try {
      let movies = await Movie.find()
      res.render("movies", {movies})
    } catch (error) {
      console.log(error)
      next(error)
    } 
  });

  router.get('/movies/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const movie = await Movie.findById(id)
        res.render('details', movie)
        
    } catch (error) {
      console.log(error)
      next(error)
    }
    
  })

module.exports = router;
