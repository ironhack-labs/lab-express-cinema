const express = require('express');
const router  = express.Router();
const MovieModel = require("./../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get("/movies", (req,res) => {
//   res.render("movies")
// })

router.get("/movies", (req,res) => {
  MovieModel
  .find()
  .then(movies => {
    res.render("movies", {
      movies
    });
  })
  .catch(dbErr => {
    console.log("couldn't get info from database")
  })
});


router.get("/movie/:id", (req,res) => {
  MovieModel
  .findById(req.params.id)
  .then(movie => {
    res.render("movie", {movie})
  })
  .catch(dbErr => console.log("db error", dbErr))
})

module.exports = router;
