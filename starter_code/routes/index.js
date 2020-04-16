const express = require('express');
const router = express.Router();
const Movie = require("../models/movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* GET movies page */

router.get('/movies', (req, res) => {
  Movie
  .find({})
    .then((dbResult) => {
      res.render("movies.hbs", {
        movies: dbResult,
      });
    })
    .catch((err) => console.log(err));
});

/* GET one movie infos */
router.get("/:id", (req, res)=> {
  Movie
  .findById(req.params.id)
  .then((dbResult)=> {
    res.render("this-movie.hbs", {
      movie: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs", {
      message: err.message,
    });
  });
});




module.exports = router;