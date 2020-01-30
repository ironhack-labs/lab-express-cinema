const express = require('express');
const router  = express.Router();
const MovieModel = require("../models/Movie")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  MovieModel
  .find()
  .then(movies => {
    res.render("movies", {
      movies
    });
  })
  .catch(dbErr => {
    console.log("OH NO ! Database error", dbErr);
  });
});

router.get('/movies/:id', (req, res, next) =>{
  MovieModel
  .findById(req.params.id)
  .then(movie =>{res.render("moviepage", { movie });
})
.catch(dbErr => console.error("OH no, db err :", dbErr));
});





module.exports = router;
