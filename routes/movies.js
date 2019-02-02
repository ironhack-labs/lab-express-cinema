const express = require('express');
const moviesModel = require('../models/Movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  moviesModel.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch(error => console.log("error loading films", error));
});

module.exports = router;
