// const express = require("express");
// const { render } = require("../app");
// const Movie = require("../models/Movie.model");
// const router = express.Router();

// /* GET home page */

// router.get("movies/:id", (req, res) => {
//   const movieId = req.params.id;

//   Movie.findById(movieId)
//     .then((movie) => {
//       console.log(movie);
//       res.render("thisMovie", { movie });
//     })
//     .catch((error) => console.log(error));
// });
// module.exports = router;
