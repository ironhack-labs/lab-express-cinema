const router = require("express").Router();
const Movie = require("../model/movies.model");



router.get("/", (req, res, next) => {
    Movie.find()
    .then(resultsFromDB => {
        console.log(resultsFromDB);
        res.render("movies/movies-list", {movies: resultsFromDB})
    })
        .catch();
});

router.get("/create", (req, res, next) => {
  res.render("movies/movie-create");
});


router.post('/create', (req, res, next) => {
  let imageInput= req.body.image
  let imageOutput 
  if (imageInput = ""){
    imageOutput = "https://via.placeholder.com/300x300"
  }
  else{
    imageOutput = imageInput
  }
  let starsArr = []
  starsArr.push(req.body.stars)

  let timeArr = []
  timeArr.push(req.body.showtimes)

  const movieDetails = {
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
    stars: starsArr,
    image: req.body.image,
    showtimes: timeArr,
  }

  Movie.create(movieDetails)
    .then( movie => {
      res.redirect("/movies");
    })
    .catch( err => {
      console.log('Error creating new movie...', err);
    })
})

router.get("/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
      .then( movie => {
        res.render("movies/movie-details", movie);
      })
      .catch();
  });


  router.get("/:movieId/edit", (req, res, next) => {
    Movie.findById(req.params.movieId)
      .then( (movieDetails) => {
        res.render("movies/movie-edit", movieDetails);
      })
      .catch( err => {
        console.log("Error getting movie details from DB...", err);
      });
  });
  
  router.post("/:movieId/edit", (req, res, next) => {
  
  const movieId = req.params.movieId
  let imageInput= req.body.image
  let imageOutput 
  if (imageInput = ""){
    imageOutput = "https://via.placeholder.com/300x300"
  }
  else{
    imageOutput = imageInput
  }
  let starsArr = []
  starsArr.push(req.body.stars)

  let timeArr = []
  timeArr.push(req.body.showtimes)

  const newDetails = {
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
    stars: starsArr,
    image: req.body.image,
    showtimes: timeArr,
  }

    Movie.findByIdAndUpdate(movieId, newDetails)
      .then( () => {
        res.redirect(`/movies-list`)
      })
      .catch( err => {
        console.log("Error updating movie...", err);
      });
  });
  
  router.post("/:movieId/delete", (req, res, next) => {
    Movie.findByIdAndDelete(req.params.movieId)
        .then( () => {
          res.redirect(`/movies/${movieId}`)
        })
        .catch( err => {
          console.log("Error deleting movie...", err);
        });
    });



module.exports = router;