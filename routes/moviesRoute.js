const router = require("express").Router();
const Movie = require("../models/book.model")

router.get("/movies", (req, res)=>{
  Movie
    .find()
    .then((moviesFromDB)=>{
      const data = {
        moviesArr: moviesFromDB
      }
      console.log(">>>DATA>>>", data)
      res.render("movies/movies", data)
    })
    .catch((err)=>{
      console.log("Error getting details of the movies from the DB", err);
      next(err);
    })
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