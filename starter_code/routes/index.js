const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  let bob;
  MovieModel.find()
    .then(dbRes => {
      console.log(dbRes)
      res.render('movies', { movies: dbRes });
    })
    .catch(dbErr => {
      console.log(dbErr)
    })


});



module.exports = router;
