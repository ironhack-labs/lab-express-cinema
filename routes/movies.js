const router = require("express").Router();


const { rawListeners } = require("../app");
const Movies = require("../models/cinema.model");


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
  res.render("movies/movie-create");
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

  Movie.create(movieDetails)
    .then( movie => {
      res.redirect("/movies");
    })
    .catch( err => {
      console.log('Error creating new movie...', err);
    })
})




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
  Movie.findByIdAndUpdate(id, update)
    .then( () => {
      
    })
    .catch( err => {
      console.log("Error updating movie...", err);
    });
});


module.exports = router;
