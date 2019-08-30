const express = require('express');
const router  = express.Router();

const moviesModel = require("../models/movie.js")

router.get("/movie/:id", (req,res)=>{

const moviefound = moviesModel.findOne({"_id" : req.params.id})
  .then (dbRes => {
    console.log("movie " + dbRes.title + " has been found")
    res.render ("movie_details", {movie : dbRes});
  })
  .catch (dbErr => console.log("there have been an error", dbErr))

});

module.exports = router;