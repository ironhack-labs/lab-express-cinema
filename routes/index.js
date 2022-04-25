const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// READ: display list of books
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      // console.log(moviesFromDB);
      res.render("movies/movies-list", { movies: moviesFromDB })
    })
    .catch(err => console.log("oops, there was an error" + err))

})


//CREATE
router.get("/movies/create", (req, res, next) => {
  res.render("movies/movie-create")
})

router.post("/movies/create", (req, res, next) => {
  const newMovie = {
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars,
    description: req.body.description,
    showtimes: req.body.showtimes
  }
  Movie.create(newMovie)
    .then(movieFromDB => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("error creating movie on DB", err)
      next(err);
    })
})



// READ: display book details
router.get("/movies/:movieId", (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then(movieDetail => {
      console.log(movieDetail);
      res.render("movies/movie-detail", movieDetail)
    })
    .catch(err => {
      console.log("error getting movie details from DB", err)
      next(err);
    });
})

//UPDATE
router.get("/movies/:movieId/edit", (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then(movieEdit => {
      res.render("movies/movie-edit", movieEdit)
    })
    .catch(err => {
      console.log("error updating movie from DB", err)
      next(err);
    });
})

router.post("/movies/:movieId/edit", (req, res, next) => {
  const id = req.params.movieId;

  const newMovieEdit = {
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars,
    description: req.body.description,
    showtimes: req.body.showtimes
  }
  Movie.findByIdAndUpdate(id, newMovieEdit)
    .then(movieEditFromDB => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("error creating movie on DB", err)
      next(err);
    })
})

module.exports = router;
