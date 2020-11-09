const express = require("Express");
const router = express.Router();

const MovieModel = require("../models/Movie.model.js");

router.get('/movies', (req,res) => {
   
    MovieModel.find()
    .then((allMoviesFromDB) =>
    
       res.render("movies", { allMoviesFromDB })
    )
    .catch((error) => `Error while fetching all movies: ${error}`);
    }); 

    module.exports = router;