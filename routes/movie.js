const express = require("express");
const router = express.Router();
const Moviemodel = require("./../models/Movie.model");

router.get("/:id", (req, res, next) => {
    Moviemodel.findById(req.params.id)
    .then(movie => {
        res.render("movie", {movie});
    })
    .catch(error=> console.log(error));
})

module.exports = router;