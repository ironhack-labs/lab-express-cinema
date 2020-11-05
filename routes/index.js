const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {

  async function getMovies() {
    const response = await Movie.find().catch(err => {
      console.log('Error in fetching data');
    });

    if (response) {
      console.log("encottradi");
      console.log(response)
      res.render("movies", { response });
    }
  }

  getMovies()
});



module.exports = router;
