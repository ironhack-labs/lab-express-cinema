const express = require('express');
const router = express.Router();

const Movie = require("../models/movie.model")

router.get("/details/:movie_id", (req, res) =>{

    const {movie_id} = req.params


Movie

.findById(movie_id)
.then(movie => res.render('details', movie))
.catch(err => console.log(err))

})

module.exports = router;