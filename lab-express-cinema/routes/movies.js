const express = require('express');
const router  = express.Router();

const Movies = require("../models/Movies")

router.get("/",(req, res) => {
  Movies.find().then(movies => {
    console.log(Movies);
    res.render("movies",{movies});
  });
});

module.exports = router;