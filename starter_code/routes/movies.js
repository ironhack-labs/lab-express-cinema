const express = require("express"); 
const router = new express.Router();
const movieModel = require("./../models/Movie");





router.get("/movies", (req, res) => {
  movieModel
    .find() // retrieve al the documents in the artists collection
    .then(movies => {
      res.render("movies", {
        movies
      });
    })
    .catch(dbErr => {
      console.log("Oh No ! Database error", dbErr);
    });
});