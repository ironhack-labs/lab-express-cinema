const express = require('express');
const router  = express.Router();
const movieModel = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/movies", (req, res) => {
  console.log("here");
  
  movieModel.find()
      .then(movies => {
          console.log(movies)
          res.render("movies", {
              movies
          });
      })
      .catch(dbErr => {
          console.log("Oh no database error", dbErr);
      });
});

router.get("/movies/:id", (req, res) => {
  console.log("here");
  
  movieModel
  .findById(req.params.id)
  .then(movie => {
    res.render("page-movie", {
      movie
    });
  })
  .catch(dbErr => {
    console.log("Oh no database error", dbErr);
  });
});

module.exports = router;
