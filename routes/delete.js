const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.post('/delete/:id', (req, res, next) => {
  Movie.deleteOne({_id: req.params.id}).then(() => {
    res.redirect("/movies")
  })
});

module.exports = router;