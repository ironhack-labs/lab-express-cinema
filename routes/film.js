const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");
/* GET home page */
router.get('/film/:theID', (req, res) => {

    req.params.theID // ==> 61052265119dbf8593258766
  
    Movie.findById(req.params.theID)
      .then(oneFilm => {
        // console.log('Retrieved film from DB:', oneFilm)
        res.render('film.hbs', { oneFilm: oneFilm });
        // res.send(oneFilm)
      })
  });

module.exports = router;