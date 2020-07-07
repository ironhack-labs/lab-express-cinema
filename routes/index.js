const express = require("express");
const movieModel = require("../models/movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  try {
    res.render("movies", { movies: await movieModel.find() });
  } catch (err) {
    next(err);
  }
});

// router.get("/movies", (req, res, next) => {
//   movieModel
//     .find()
//     .then((dbRes) => res.render("movies", { movies: dbRes }))
//     .catch(next);
// });

// router.get("/movies", (req, res, next) => {
//   movieModel
//     .find()
//     .then((dbRes) => {
//       const movies = dbRes;
//       res.render("movies", { movies });
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
router.get("/movies/:id", async (req, res, next) => {
    try {
      res.render("movie", { movie: await movieModel.findById(req.params.id) });
    } catch (err) {
      next(err);
    }
  });


module.exports = router;
