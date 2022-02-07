const router = require("express").Router();
const Movie = require("../model/Movies.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesFromDb) => {
      res.render("movies", { movies: moviesFromDb });
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

router.get("/create", (req, res, next) => {
  res.render("movie-create");
});
// we can see it in localhost:3000/movies/create; how could I see it in localhost:3000/create ?

router.post("/create", (req, res, next) => {
  const { title, director, stars, image, description, showtimes } = req.body;
  const movieDetails = {
    title,
    director,
    stars,
    image,
    description,
    showtimes,
  };
  Movie.create(movieDetails)
    .then(() => res.redirect("/movies"))
    .catch((err) => {
      console.log("error creating new book:", err);
    });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movieDetails) => {
      res.render("movie-details", { movieDet: movieDetails });
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

//

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movieDetails) => {
      res.render("movie-edit", movieDetails);
    })
    .catch((err) => {
      console.log("error getting edit form:", err);
    });
});

router.post("/:id/edit", (req, res, next) => {
  const movieId = req.params.id;
  const newDetails = {
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars,
    image: req.body.image,
    description: req.body.description,
    showtimes: req.body.showtimes,
  };
  Movie.findByIdAndUpdate(movieId, newDetails)
    .then(() => {
      res.redirect(`/movies/${req.params.id}`);
    })
    .catch((err) => {
      console.log("error updating book:", err);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("error deleting book:", err);
    });
});

module.exports = router;
