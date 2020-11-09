const express = require("Express");
const router = express.Router();

const MovieModel = require("../models/Movie.model.js");

router.get('/movies/:id', (req,res) => {
    const { id } = req.params;
    MovieModel.findById(id)
    .then((foundMovie) =>  
     res.render("movie-details", { foundMovie }))
    .catch((error) => `Error while fetching one movies: ${error}`)})
module.exports = router;