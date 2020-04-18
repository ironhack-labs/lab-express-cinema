const express = require('express');
// const hbs = require("hbs");
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res) => {
  Movie.find({})
  .then((dbResult) => {
    res.render('movies.hbs', {
      toto: dbResult,
    
    });
  })
  .catch((err) => console.log(err));
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
  .then((dbResult) => {
      console.log(dbResult)
    res.render("movie.hbs", {
      toto: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs")
  });
});


module.exports = router;