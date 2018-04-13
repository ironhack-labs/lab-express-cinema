const express = require('express');
const router  = express.Router();

const Movies = require("../models/Movies")

router.get("/:id",(req, res) => {
  Movies.findById(req.params.id).then(movie => {
    //console.log(movie)
    res.render("oneMovie",movie);
  });
});

module.exports = router;