const express = require('express');
const moviesModel = require('../models/Movie');
const router = express.Router();

/* GET movies page */
router.get('/', (req, res, next) => {
  moviesModel.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch(error => console.log('error loading films', error));
});

/* GET movie info page */

router.get('/:id', (req, res, next) => {
  const { _id } = req.params;
  moviesModel.findOne(_id)
    .then((data) => {
      console.log(data);
      res.render('movieInfo', { data });
    })
    .catch(error => console.log(error));
});

module.exports = router;
