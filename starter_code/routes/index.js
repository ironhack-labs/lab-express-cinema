const express = require('express');
const router  = express.Router();
const movieModel = require("../models/Movies")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req,res) => {
  movieModel
  .find()
  .then(dbRes => {
    res.render("movies", {
      dbRes
    });
  })
  .catch(dbErr => {
    console.error("error", dbErr);
  });
});

router.get("/movie-infos/:id", (req,res) => {
  movieModel
  .findById(req.params.id)
  .then(dbRes => {
    res.render("movie-infos", {movie: dbRes});
  })
  .catch(err => console.error(err))
})

module.exports = router;
