const express = require('express');
const router  = express.Router();
const Movie = require("./../models/movies")

// router.get("/movies", (req, res) => {
//   res.render("form-movie");
// });

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/Movies", (req, res) => {
  Movie.find().then(dbRes => {
      res.render("movies.hbs"
      , {
          Movies: dbRes,
      });
  }).catch(err => console.log(err))
  });

  router.get("/movies/:id", (req, res) => {
    Movie.findOne({_id: req.params.id}).then(dbRes => {
      res.render("form-movie", { movie: dbRes, css: ["form-movie"] });
   }) .catch(err => console.log("toto"+ err));   
  
  });

module.exports = router;
