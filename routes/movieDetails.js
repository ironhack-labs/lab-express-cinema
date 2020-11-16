const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET details page by MovieId */
router.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movieDetails) => {
      console.log("Movie Id:", movieDetails);
      res.render("details", { movieDetails });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});

module.exports = router;
