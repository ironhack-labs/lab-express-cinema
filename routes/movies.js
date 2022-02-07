const router = require("express").Router();
const Movie = require('../models/Movie.model');


router.get("/movies-list", (req, res, next) => {
    Movie
      .find()
      .then((moviesFromDb) => {
         res.render("movies/movies-list", { movies: moviesFromDb });
      })
      .catch(err => console.log("Error finding movies", err));
  });

  router.get("/add", (req, res, next) => {
    res.render("movies/movie-add");
  });
  
  router.post("/add", (req, res, next) => {
    let starsArr =[]
    starsArr.push(req.body.stars)
    
    let showtimesArr =[]
    showtimesArr.push(req.body.showtimes)
    
    const movieDetails = {
      title: req.body.title,
      director: req.body.director,
      stars: starsArr,
      image: req.body.image,
      description: req.body.description,
      showtimes: showtimesArr,
    };
    Movie
      .create(movieDetails)
      .then((movie) => {
        console.log(movie);
        res.redirect("/");
      })
      .catch((err) => console.log("Error creating new book  ", err));
  });

  router.get("/movies-list/:id", (req, res, next) => {
    Movie
      .findById(req.params.id)
      .then((movieFromDb) => {
        res.render("movies/movie-details", movieFromDb);
      })
      .catch(err => console.log("Error getting book from database  ", err));
  });

  router.get("/movies-list/:id/edit", (req, res, next) => {
    Movie
      .findById(req.params.id)
      .then((movieId) => {
        res.render("movies/movie-edit", {movie: movieId})
      })
      .catch(err => console.log("Error viewing edit  ", err));    
  });

  router.post("/movies-list/:id/edit", (req, res, next) => {
    let starsArr =[]
    starsArr.push(req.body.stars)
    
    let showtimesArr =[]
    showtimesArr.push(req.body.showtimes)

    const movieId = req.params.id

    const newDetails = {
      title: req.body.title,
      director: req.body.director,
      stars: starsArr,
      image: req.body.image,
      description: req.body.description,
      showtimes: showtimesArr,
    };
    Movie
      .findByIdAndUpdate(movieId, newDetails)
      .then(() => {
        res.redirect("/movies-list");
      })
      .catch((err) => console.log("Error updating book  ", err));
  });
  
  router.post("/movies-list/:id/delete", (req, res, next) => {
    Movie
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect("/movies-list");
      })
      .catch((err) => console.log("Error deleting book  ", err));
  });
  
  
module.exports = router;