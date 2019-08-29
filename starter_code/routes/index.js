const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  console.log(MovieModel)
  MovieModel.find()
    .then(dbRes => {
      console.log(dbRes)
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
  res.render('movies');

});



module.exports = router;
