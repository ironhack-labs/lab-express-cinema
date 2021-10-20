const router = require("express").Router();
const Movie = require("../models/movie.model")

router.get("/movies", (req, res)=>{
  Movie
    .find()
    .then((moviesFromDB)=>{
      const data = {
        moviesArr: moviesFromDB
      }
      res.render("movies/movies-list", data)
    })
    .catch((err)=>{
      console.log("Error getting details of the movies from the DB", err);
      next(err);
    })
})

router.get ('/movies/create', (req, res, next)=>{
  console.log(">>>Creating movies>>>")
  res.render("movies/movies-create");
})

router.get("/movies/:id", (req, res)=>{
  Movie
    .find(req.params.title)
    .then ((movieTitle)=>{
      const details = {
        movieArr: movieTitle
      }
      res.render("movies/movies-details", details)
    })
    .catch((err)=>{
      console.log("Error getting details from a single movie from the DB", err);
      next(err);
    })
})