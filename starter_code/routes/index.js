const express = require('express');
const router  = express.Router();

const seeds = require("./../bin/seeds");
const Movie = require("./../models/movie");

/* GET home page */
router.get('/', (req, res, next) => {
  const title = "Cinema IronHack"
  res.render('index', {title});
});

router.get("/movies", (req, res) => {
  Movie.find({}).then(movies => { 
    res.render("movies", { movies });
  })
  .catch(err => {
    res.render("movies", { err: "an error occured" });
  })

});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
  .then(dbRes => res.render("movie-details", { dbRes }))
  .catch(dbErr => console.log(dbErr));
});

module.exports = router;
