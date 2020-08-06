const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie.model");

console.log(" insode movieinfo  js ");

/* GET movies page */
// router.get("/", (req, res, next) => {
router.get("/movieinfo/:id", (req, res, next) => {
  console.log(" movie information page called ");
  console.log(req.params.id);
  const id = "5f2b02ef60e86539e8e96979";
  movieModel
    .find({ _id: req.params.id })
    .then((movieInfo) => {
      // console.log(movieInfo);
      res.render("movieInfo", { movieInformation: movieInfo[0] });
    })
    .catch((error) => {
      console.log(` Error while fetching movies List : ${error}`);
      closeDBConnection();
    });
});

module.exports = router;
