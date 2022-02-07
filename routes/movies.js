const router = require("express").Router();

const express = require('express');

const app = express();

const { rawListeners } = require("../app");
const Movies = require("../models/cinema.model");

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


// router.get("/:movieId", (req, res, next) => {
//     Movies.findById(req.params.movieId)
//       .then( movie => {
//         res.render("movies/movie-details", movie);
//       })
//       .catch();
//   });
  

router.get("/details/:id", (req, res, next) => {
    console.log("showing: " + req.params.id)
    Movies.findById(req.params.id)
      .then( movie => {
        res.render("movie-details", movie);
      })
      .catch();
  });

router.get("/show", (req, res, next) => {

  Movies.find()
    .then( movies => {
      res.render("movies-list", {movies});
    })
    .catch();
});


router.get("/create", (req, res, next) => {
  res.render("movie-create");
});

router.post('/create', (req, res, next) => {
  const movieDetails = {
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars,
    image: req.body.image,
    description: req.body.description,
    showtimes: req.body.showtimes
  }

  Movies.create(movieDetails)
    .then( movie => {
      res.redirect("/movies/show");
    })
    .catch( err => {
      console.log('Error creating new movie...', err);
    })
})


router.get("/edit/:movieId", (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then( (movieDetails) => {
      res.render("movie-edit", movieDetails);
    })
    .catch( err => {
      console.log("Error getting movie details from DB...", err);
    });
});

router.post("/edit/:movieId", (req, res, next) => {
    const movieDetails = {
        title: req.body.title,
        director: req.body.director,
        stars: req.body.stars,
        image: req.body.image,
        description: req.body.description,
        showtimes: req.body.showtimes
      }
  console.log(req.params.movieId);
  Movies.findByIdAndUpdate(req.params.movieId, movieDetails)
    .then( () => {
        res.redirect("/movies/details/" + req.params.movieId);
    })
    .catch( err => {
      console.log("Error updating movie...", err);
    });
});

router.get("/delete/:movieId", (req, res, next) => {
    Movies.findByIdAndDelete(req.params.movieId)
      .then( (movies) => {
        res.redirect("/movies/show");
      })
      .catch( err => {
        console.log("Error getting movie details from DB...", err);
      });
  });

module.exports = router;
