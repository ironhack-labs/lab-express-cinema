const express = require('express');
const router = express.Router();
const movies = require("./../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (request, res, next) => {
  movies.find()
    .then((dbResult) => {
      res.render("movies", {
        movies: dbResult,
      });
    })
    .catch((err) => console.log(err));
  //   res.render("index.hbs");
});


router.get("/:id", (req, res) => {
  movies.findById(req.params.id)
    .then((dbResult) => {
      res.render("oneMovie", {
        movie: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message,
      });
    });
});

module.exports = router;