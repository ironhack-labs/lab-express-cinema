const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;


const Movie = require("./models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {

      console.log(moviesFromDB);
    //   res.render("/views/movies.hbs", { moviesFromDB });
    res.send('hello?')
    })
    .catch((err) => {
      console.log("Error getting list of movies from DB", err);
      next(err);
    });
});