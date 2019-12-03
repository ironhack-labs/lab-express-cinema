const express = require("express");
const router = express.Router();
const Movie = require("../model/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(allTheMovies => {
      res.render("movie-view/movies", { theMovies: allTheMovies });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/add-new-movie", (req, res, next) => {
  res.render("movie-view/add-new-movie");
});

router.post("/create-movie", (req, res, next) => {
  let {title, director, image, description, stars} = req.body;
  // let theTitle = req.body.newMovieTitle;
  // let theDirector = req.body.newMovieDirector;
  // let theImage = req.body.newMovieImage;
  // let theDescription = req.body.newMovieDescription;


  Movie.create(
    {title, director, image, description, stars}
    )
    .then(Response => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movie-detail/:movieId", (req,res,next)=>{
  let id=req.params.movieId;
  Movie.findById(id)
  .then((theMovie)=>{
    res.render("movie-view/movie-detail", {movie: theMovie})
  })
  .catch((err)=>{
    next(err)
  })
})

module.exports = router;
