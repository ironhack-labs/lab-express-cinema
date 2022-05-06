const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

// movie route

router.get("/", (req, res) => {
  Movie.find()
    .then((movieInfos) => {
      console.log("Retrieved information: ", movieInfos);
      res.render("movies", { movieInfos });
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

// movie details route
router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movieDetails) => {
      console.log("Here are your details: ", movieDetails);
      res.render("details", { movieDetails });
    })
    .catch((error) => {
      console.log("Something went wrong: ", error);
    });
});

module.exports = router;
