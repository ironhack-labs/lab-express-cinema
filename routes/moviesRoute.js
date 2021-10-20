const router = require("express").Router();
const Movie = require("../models/Movie.model")

router.get("/movies", (req, res, next)=>{
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
  res.render("movies/movies-create");
})

router.post("/movies/create", (req, res, next)=>{
  const {title, director, stars, description, showtime} = req.body;
  Movie
    .create({title, director, stars, description, showtime})
    .then (()=>{
      res.redirect("/movies");
    })
    .catch( (error) => {
      console.log("Error adding new book to DB", error);
      next(error);
    });

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