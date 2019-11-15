const express = require('express');
const router = express.Router();
const data = require("../bin/seed")
const Movies = require('../models/movies.model')



Movies.collection.drop()
router.get('/', (req, res) => {
  Movies.insertMany(data)
    .then(allMovies => {
      console.log(allMovies)
      res.render('movies', {
        movies: allMovies
      })
      console.log()
    })
    .catch(err => console.log("Error consultando la BBDD: ", err))
});




module.exports = router;