const express = require("express");
const router = express.Router();
var Movie = require("../models/Movie.model");

router.get("/movies-details/:id/details", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("movies-details", { movie });
  } catch (dbError) {
    next(dbError);
  }
});

module.exports = router;
