const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model");



router.get("/movie/:id", (req, res, next) => {
    MovieModel.findById(req.params.id)
    .then(movie => {
        res.render("movie.hbs", {list : movie});
    })
    .catch(error=> console.log(error));
})

module.exports = router; 